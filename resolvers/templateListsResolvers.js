const { PrismaClient } = require('@prisma/client');
const { parseListUsers } = require('../utils/lists');

const prisma = new PrismaClient();

const assignUsersToList = (usersIds, listId) => {
  return prisma.UsersTemplateLists.createMany({
    data: usersIds.map(id => ({
      userId: parseInt(id, 10),
      templateListId: parseInt(listId, 10),
      assignedBy: 'templateAssigned'
    })),
    skipDuplicates: true
  });
};

const templateListsResolvers = {
  Query: {
    templateLists: async () => {
      const tLists = await prisma.TemplateList.findMany({ include: { users: { include: { user: true } } } });

      return parseListUsers(tLists);
    },

    templateList: async (parent, { id }, context, info) => {
      const tList = await prisma.TemplateList.findUnique({ where: { id: parseInt(id, 10) }, include: { users: { include: { user: true } } } });

      const [parsedList] = parseListUsers([tList]);

      return parsedList;
    }
  },
  Mutation: {
    createTemplateList: async (parent, {  name, description="" }) => {
      const list = await prisma.TemplateList.create({
        data: { name, description }
      });

      return list;
    },
    deleteTemplateList: async (parent, { id }) => {
      await prisma.UsersTemplateLists.deleteMany({ where: { templateListId: parseInt(id, 10) }});

      const list = await prisma.TemplateList.delete({ where: { id: parseInt(id, 10) }});

      return list;
    }
  }
};

module.exports = { templateListsResolvers };
