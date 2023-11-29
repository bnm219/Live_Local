-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "email" TEXT,
    "imageUrl" TEXT,
    "city" TEXT,
    "password" TEXT
);
