-- AlterTable
ALTER TABLE "GroceryItem" ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "checked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notes" TEXT;

-- CreateTable
CREATE TABLE "GroceryCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT,
    "icon" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "parentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GroceryCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GroceryCategory_name_userId_parentId_key" ON "GroceryCategory"("name", "userId", "parentId");

-- AddForeignKey
ALTER TABLE "GroceryCategory" ADD CONSTRAINT "GroceryCategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "GroceryCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroceryCategory" ADD CONSTRAINT "GroceryCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroceryItem" ADD CONSTRAINT "GroceryItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "GroceryCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
