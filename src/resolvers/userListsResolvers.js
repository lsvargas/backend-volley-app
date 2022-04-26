const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userListsResolvers = {
  Mutation: {
    editUserList: async (parent, { userListId, status }) => {
      const userList = await prisma.UsersLists.update({
        where: { 
          id: parseInt(userListId, 10)
        },
        data: { status },
        include: { user: true }
      });

      const newUserList = {
        ...userList,
        name: userList.user.name,
        lastname: userList.user.lastname
      };

      return newUserList;
    },
    deleteUserList: async (parent, { listId, userId }) => {
      const userList = await prisma.UsersLists.delete({ where: { listId: parseInt(listId, 10),  userId: parseInt(userId, 10) }});

      return userList;
    }
  }
};

module.exports = { userListsResolvers };
