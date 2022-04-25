const { gql } = require("apollo-server");

const templateListType = gql`
  type TemplateList {
    id: ID
    name: String
    description: String
    users: [UserTemplateList]
  }
`;

module.exports = { templateListType };
