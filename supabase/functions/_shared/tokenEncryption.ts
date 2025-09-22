// Token encryption utilities for secure storage
import { crypto } from "https://deno.land/std@0.168.0/crypto/mod.ts";

const ALGORITHM = "AES-GCM";
const IV_LENGTH = 12; // 96 bits for AES-GCM

/**
 * Get encryption key from environment
 */
function getEncryptionKey(): string {
  const key = Deno.env.get('TOKEN_ENCRYPTION_KEY');
  if (!key) {
    throw new Error('TOKEN_ENCRYPTION_KEY not found in environment');
  }
  return key;
}

/**
 * Convert string to CryptoKey for AES-GCM
 */
async function getKey(): Promise<CryptoKey> {
  const keyString = getEncryptionKey();
  const keyData = new TextEncoder().encode(keyString.padEnd(32, '0').slice(0, 32));
  
  return await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: ALGORITHM, length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

/**
 * Encrypt a token string
 */
export async function encryptToken(token: string): Promise<string> {
  try {
    const key = await getKey();
    const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
    const encodedToken = new TextEncoder().encode(token);

    const encrypted = await crypto.subtle.encrypt(
      { name: ALGORITHM, iv },
      key,
      encodedToken
    );

    // Combine IV and encrypted data
    const combined = new Uint8Array(iv.length + encrypted.byteLength);
    combined.set(iv);
    combined.set(new Uint8Array(encrypted), iv.length);

    // Convert to base64 for storage
    return btoa(String.fromCharCode(...combined));
  } catch (error) {
    console.error('Token encryption failed:', error);
    throw new Error('Failed to encrypt token');
  }
}

/**
 * Decrypt a token string
 */
export async function decryptToken(encryptedToken: string): Promise<string> {
  try {
    const key = await getKey();
    
    // Convert from base64
    const combined = Uint8Array.from(atob(encryptedToken), c => c.charCodeAt(0));
    
    // Extract IV and encrypted data
    const iv = combined.slice(0, IV_LENGTH);
    const encrypted = combined.slice(IV_LENGTH);

    const decrypted = await crypto.subtle.decrypt(
      { name: ALGORITHM, iv },
      key,
      encrypted
    );

    return new TextDecoder().decode(decrypted);
  } catch (error) {
    console.error('Token decryption failed:', error);
    throw new Error('Failed to decrypt token');
  }
}

/**
 * Safely encrypt tokens for database storage
 */
export async function encryptTokens(accessToken: string, refreshToken?: string) {
  return {
    access_token_encrypted: await encryptToken(accessToken),
    refresh_token_encrypted: refreshToken ? await encryptToken(refreshToken) : null,
    // Keep plaintext fields null for security
    access_token: null,
    refresh_token: null
  };
}

/**
 * Safely decrypt tokens from database
 */
export async function decryptTokens(account: any) {
  if (!account.access_token_encrypted) {
    // Fallback to plaintext tokens (for migration)
    if (account.access_token) {
      console.warn('Using plaintext token - should be migrated to encrypted storage');
      return {
        access_token: account.access_token,
        refresh_token: account.refresh_token
      };
    }
    throw new Error('No tokens available');
  }

  return {
    access_token: await decryptToken(account.access_token_encrypted),
    refresh_token: account.refresh_token_encrypted 
      ? await decryptToken(account.refresh_token_encrypted) 
      : null
  };
}
