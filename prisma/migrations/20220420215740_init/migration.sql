/*
  Warnings:

  - The primary key for the `UsersLists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UsersTemplateLists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId,listId]` on the table `UsersLists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,templateListId]` on the table `UsersTemplateLists` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UsersLists" DROP CONSTRAINT "UsersLists_pkey";

-- AlterTable
ALTER TABLE "UsersTemplateLists" DROP CONSTRAINT "UsersTemplateLists_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "UsersLists_userId_listId_key" ON "UsersLists"("userId", "listId");

-- CreateIndex
CREATE UNIQUE INDEX "UsersTemplateLists_userId_templateListId_key" ON "UsersTemplateLists"("userId", "templateListId");
