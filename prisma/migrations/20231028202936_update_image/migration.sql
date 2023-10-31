/*
  Warnings:

  - You are about to drop the column `isAvaliable` on the `Product` table. All the data in the column will be lost.
  - Added the required column `isEnabled` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "product_id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "categoryId" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "color" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "isEnabled" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("category_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "color", "createdAt", "description", "image", "name", "price", "product_id", "stock", "updatedAt") SELECT "categoryId", "color", "createdAt", "description", "image", "name", "price", "product_id", "stock", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
