-- AlterTable
ALTER TABLE "GroceryCategory" ADD COLUMN IF NOT EXISTS "isDefault" BOOLEAN NOT NULL DEFAULT false;
