const { gql } = require("apollo-server");

const query = gql`
  type Query {
    users: [User]
    list(id: ID!): List
    lists: [List]
    templateLists: [TemplateList]
    templateList(id: ID!): TemplateList
  }
`;

module.exports = { query };