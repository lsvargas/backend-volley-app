const { gql } = require("apollo-server");

const listType = gql`
  scalar Date

  type List {
    id: ID
    name: String
    date: Date
    description: String
    url: String
    users: [UserList]
  }
`;

module.exports = { listType };
