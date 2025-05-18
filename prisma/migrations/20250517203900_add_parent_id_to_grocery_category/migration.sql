-- AlterTable
ALTER TABLE "GroceryCategory" ADD COLUMN "parentId" TEXT;

-- AddForeignKey
ALTER TABLE "GroceryCategory" ADD CONSTRAINT "GroceryCategory_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "GroceryCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
