const { query } = require("./query");
const { mutation } = require("./mutation");
const { templateListInputType } = require("./inputTypes");
const {
  userType,
  listType,
  userListType,
  templateListType,
  userTemplateListType,
  authUserType
} = require("./types");

const { dateScalar } = require("./scalars/date");

const typeDefs = [
  query,
  mutation,
  userType,
  listType,
  userListType,
  templateListType,
  userTemplateListType,
  templateListInputType,
  authUserType
];

module.exports = {
  typeDefs,
  resolvers: {
    Date: dateScalar
  },
};
