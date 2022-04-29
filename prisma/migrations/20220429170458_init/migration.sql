-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UsersLists" ADD COLUMN     "waitingList" BOOLEAN NOT NULL DEFAULT false;
