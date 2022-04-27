const { usersResolvers } = require('./usersResolvers');
const { listsResolvers } = require('./listsResolvers');
const { templateListsResolvers } = require('./templateListsResolvers');
const { userListsResolvers } = require('./userListsResolvers');
const { userTemplateListsResolvers } = require('./userTemplateListsResolvers');
const { authResolvers } = require('./authResolvers');

const resolvers = [
  usersResolvers,
  listsResolvers,
  templateListsResolvers,
  userListsResolvers,
  userTemplateListsResolvers,
  authResolvers
];

module.exports = { resolvers };
