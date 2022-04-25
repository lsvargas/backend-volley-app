-- AlterTable
ALTER TABLE "UsersLists" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UsersLists_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UsersTemplateLists" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UsersTemplateLists_pkey" PRIMARY KEY ("id");
