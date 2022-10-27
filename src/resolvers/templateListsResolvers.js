const { PrismaClient } = require('@prisma/client');
const { parseListUsers } = require('../utils/lists');

const prisma = new PrismaClient();

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
    },
    reOrderTemplateList: async (parent, { id, newPriority }) => {
      const list = await prisma.TemplateList.update({
        where: { id: parseInt(id, 10) },
        data: { priority: newPriority }
        // include: { users: { include: { user: true } } }
      });

      return list;
    },
  }
};

module.exports = { templateListsResolvers };
