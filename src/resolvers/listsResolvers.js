const { PrismaClient } = require('@prisma/client');
const { parseListUsers } = require('../utils/lists');

const prisma = new PrismaClient();


const assignUsersToList = (usersIds, listId) => {
  return prisma.UsersLists.createMany({
    data: usersIds.map(id => ({
      userId: id,
      listId: parseInt(listId, 10),
      status: 0,
      assignedBy: ''
    })),
    skipDuplicates: true
  });
};

const listsResolvers = {
  Query: {
    lists: async () => {
      const lists = await prisma.list.findMany({
        include: { users: { include: { user: true } } },
        orderBy: {
          date: 'asc'
        }
      });

      return parseListUsers(lists);
    },

    list: async (parent, { id }, context, info) => {
      const list = await prisma.list.findUnique({ where: { id: parseInt(id, 10) }, include: { users: { include: { user: true } } } });

      const [parsedList] = parseListUsers([list]);

      return parsedList;
    }
  },
  Mutation: {
    createList: async (parent, { date, templateListId }) => {
      const tList = await prisma.templateList.findUnique({ where: { id: parseInt(templateListId, 10) }, include: { users: { include: { user: true } } } });

      const list = await prisma.list.create({
        data: { name: tList.name, date, description: '' }
      });

      const userIds = tList.users.map(u => u.userId);

      await assignUsersToList(userIds, list.id)

      return list;
    },
    deleteList: async (parent, { id }) => {
      await prisma.UsersLists.deleteMany({ where: { listId: parseInt(id, 10) }});

      const list = await prisma.List.delete({ where: { id: parseInt(id, 10) }});

      return list;
    }
  }
};

module.exports = { listsResolvers };
