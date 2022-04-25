const { PrismaClient } = require('@prisma/client');
const { parseUserTemplateList } = require('../utils/lists');

const prisma = new PrismaClient();


const userTemplateListsResolvers = {
  Mutation: {
    createUserTemplateList: async (parent, { templateListId, userId }) => {
      const userTemplateList = await prisma.UsersTemplateLists.create({
        data: {
          templateList: {
            connect: {
              id: parseInt(templateListId, 10)
            }
          },
          user: {
            connect: {
              id: parseInt(userId, 10)
            }
          },
          assignedBy: ''
        },
        include: { user: true }
      });

      return parseUserTemplateList(userTemplateList);
    },
    deleteUserTemplateList: async (parent, { templateListId, userId }) => {
      const userTemplateList = await prisma.UsersTemplateLists.delete({
        where: { 
          userId_templateListId: { 
            userId: parseInt(userId, 10), 
            templateListId: parseInt(templateListId, 10)
          }
        },
        include: { user: true }
      });

      return parseUserTemplateList(userTemplateList);
    }
    // editUserTemplateList: async (parent, { listId, userId, status }) => {
    //   const userList = await prisma.UsersTemplateLists.update({
    //     where: { 
    //       userId_listId: { 
    //         userId: parseInt(userId, 10), 
    //         listId: parseInt(listId, 10)
    //       }
    //     },
    //     data: { status }
    //   });

    //   return userList;
    // },
  }
};

module.exports = { userTemplateListsResolvers };
