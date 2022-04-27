const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    createTemplateList(name: String): TemplateList
    createUserTemplateList(templateListId: ID! userId: ID!): UserTemplateList
    createUser(name: String lastname: String): User
    createList(templateListId: ID! date: String): List
    deleteTemplateList(id: ID!): TemplateList
    deleteUserList(listId: ID! userId: Int!): UserList
    deleteUserTemplateList(templateListId: ID! userId: ID!): UserTemplateList
    deleteUser(id: ID!): User
    deleteList(id: ID!): List
    editUserList(userListId: ID! status: Int!): UserList
    registerUser(name: String, email: String, password: String): AuthUser
    loginUser(email: String, password: String): AuthUser
  }
`;

module.exports = { mutation };