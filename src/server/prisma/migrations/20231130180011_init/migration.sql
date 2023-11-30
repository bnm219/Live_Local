/*
  Warnings:

  - Added the required column `isBand` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "isBand" BOOLEAN NOT NULL,
    "email" TEXT,
    "imageUrl" TEXT,
    "city" TEXT,
    "password" TEXT
);
INSERT INTO "new_User" ("city", "email", "id", "imageUrl", "password", "userName") SELECT "city", "email", "id", "imageUrl", "password", "userName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
