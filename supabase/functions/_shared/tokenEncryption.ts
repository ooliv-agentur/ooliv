// Token encryption utilities for secure LinkedIn token storage
import { encodeBase64, decodeBase64 } from "https://deno.land/std@0.168.0/encoding/base64.ts";

/**
 * Encrypts a token using AES-GCM encryption
 * @param token - The plaintext token to encrypt
 * @param encryptionKey - The base64 encoded encryption key
 * @returns Promise<string> - Base64 encoded encrypted token with IV prepended
 */
export async function encryptToken(token: string, encryptionKey: string): Promise<string> {
  try {
    // Decode the encryption key from base64
    const keyData = decodeBase64(encryptionKey);
    
    // Import the key for AES-GCM
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'AES-GCM' },
      false,
      ['encrypt']
    );

    // Generate a random IV (12 bytes for GCM)
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    // Encrypt the token
    const encodedToken = new TextEncoder().encode(token);
    const encryptedData = await crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      cryptoKey,
      encodedToken
    );

    // Combine IV + encrypted data and encode as base64
    const combined = new Uint8Array(iv.length + encryptedData.byteLength);
    combined.set(iv);
    combined.set(new Uint8Array(encryptedData), iv.length);
    
    return encodeBase64(combined);
  } catch (error) {
    console.error('Token encryption failed:', error);
    throw new Error('Failed to encrypt token');
  }
}

/**
 * Decrypts a token using AES-GCM decryption
 * @param encryptedToken - The base64 encoded encrypted token (with IV prepended)
 * @param encryptionKey - The base64 encoded encryption key
 * @returns Promise<string> - The decrypted plaintext token
 */
export async function decryptToken(encryptedToken: string, encryptionKey: string): Promise<string> {
  try {
    // Decode the encryption key from base64
    const keyData = decodeBase64(encryptionKey);
    
    // Import the key for AES-GCM
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'AES-GCM' },
      false,
      ['decrypt']
    );

    // Decode the combined IV + encrypted data
    const combined = decodeBase64(encryptedToken);
    
    // Extract IV (first 12 bytes) and encrypted data
    const iv = combined.slice(0, 12);
    const encryptedData = combined.slice(12);

    // Decrypt the token
    const decryptedData = await crypto.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      cryptoKey,
      encryptedData
    );

    // Convert back to string
    return new TextDecoder().decode(decryptedData);
  } catch (error) {
    console.error('Token decryption failed:', error);
    throw new Error('Failed to decrypt token');
  }
}

/**
 * Generates a new encryption key for token storage
 * @returns Promise<string> - Base64 encoded encryption key
 */
export async function generateEncryptionKey(): Promise<string> {
  const key = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
  
  const keyData = await crypto.subtle.exportKey('raw', key);
  return encodeBase64(new Uint8Array(keyData));
}

/**
 * Safely handles token encryption with error handling
 * @param token - Token to encrypt (can be null/undefined)
 * @param encryptionKey - Encryption key
 * @returns Promise<string | null> - Encrypted token or null if input was null
 */
export async function safeEncryptToken(token: string | null | undefined, encryptionKey: string): Promise<string | null> {
  if (!token) return null;
  return await encryptToken(token, encryptionKey);
}

/**
 * Safely handles token decryption with error handling
 * @param encryptedToken - Encrypted token to decrypt (can be null/undefined)
 * @param encryptionKey - Encryption key
 * @returns Promise<string | null> - Decrypted token or null if input was null
 */
export async function safeDecryptToken(encryptedToken: string | null | undefined, encryptionKey: string): Promise<string | null> {
  if (!encryptedToken) return null;
  return await decryptToken(encryptedToken, encryptionKey);
}