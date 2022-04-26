const { gql } = require("apollo-server");

const userTemplateListType = gql`
  type UserTemplateList {
    id: ID
    userId: Int
    name: String
    email: String
    lastname: String
    secondLastname: String
  }
`;

module.exports = { userTemplateListType };
