-- CreateTable
CREATE TABLE "Institution" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersInstitutions" (
    "userId" INTEGER NOT NULL,
    "institutionId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersInstitutions_pkey" PRIMARY KEY ("institutionId","userId")
);

-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateList" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TemplateList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersLists" (
    "userId" INTEGER NOT NULL,
    "listId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersLists_pkey" PRIMARY KEY ("userId","listId")
);

-- CreateTable
CREATE TABLE "UsersTemplateLists" (
    "userId" INTEGER NOT NULL,
    "templateListId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsersTemplateLists_pkey" PRIMARY KEY ("userId","templateListId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Institution_slug_key" ON "Institution"("slug");

-- AddForeignKey
ALTER TABLE "UsersInstitutions" ADD CONSTRAINT "UsersInstitutions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersInstitutions" ADD CONSTRAINT "UsersInstitutions_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersLists" ADD CONSTRAINT "UsersLists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersLists" ADD CONSTRAINT "UsersLists_listId_fkey" FOREIGN KEY ("listId") REFERENCES "List"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersTemplateLists" ADD CONSTRAINT "UsersTemplateLists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersTemplateLists" ADD CONSTRAINT "UsersTemplateLists_templateListId_fkey" FOREIGN KEY ("templateListId") REFERENCES "TemplateList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
