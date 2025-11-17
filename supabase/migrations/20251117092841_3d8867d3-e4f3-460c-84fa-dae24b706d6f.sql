-- Drop the deprecated pgjwt extension
-- This extension is no longer needed as JWT handling is done at the API layer
-- Removing it will unblock Postgres version upgrades
DROP EXTENSION IF EXISTS pgjwt CASCADE;