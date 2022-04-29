const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const usersResolvers = {
  Query: {
    users: () => prisma.User.findMany({
      where: { isAdmin: false }
    })
  },
  Mutation: {
    createUser: async (parent, { name, lastname }) => {
      const user = await prisma.User.create({
        data: { name, lastname}
      });

      return user;
    },
    deleteUser: async (parent, { id }) => {
      const user = await prisma.User.delete({
        where: { id: parseInt(id, 10) }
      });

      return user;
    }
  }
};

module.exports = { usersResolvers };
