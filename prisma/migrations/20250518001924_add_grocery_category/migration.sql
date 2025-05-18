/*
  Warnings:

  - You are about to drop the column `description` on the `GroceryCategory` table. All the data in the column will be lost.
  - You are about to drop the column `isDefault` on the `GroceryCategory` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `GroceryCategory` table. All the data in the column will be lost.
  - You are about to drop the column `checked` on the `GroceryItem` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `GroceryItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "GroceryCategory" DROP CONSTRAINT "GroceryCategory_parentId_fkey";

-- DropIndex
DROP INDEX "GroceryCategory_name_userId_parentId_key";

-- AlterTable
ALTER TABLE "GroceryCategory" DROP COLUMN "description",
DROP COLUMN "isDefault",
DROP COLUMN "parentId";

