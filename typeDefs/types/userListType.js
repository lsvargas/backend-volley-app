const { gql } = require("apollo-server");

const userListType = gql`
  type UserList {
    id: ID
    userId: Int
    listId: Int
    status: Int  
    name: String
    email: String
    lastname: String
    secondLastname: String
  }
`;

module.exports = { userListType };
