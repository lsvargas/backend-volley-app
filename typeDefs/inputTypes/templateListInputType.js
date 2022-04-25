const { gql } = require("apollo-server");

const templateListInputType = gql`
  input TemplateListInput {
    name: String
    description: String
    userListIds: [ID]
  }
`;

module.exports = { templateListInputType };
