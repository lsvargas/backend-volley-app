const { gql } = require("apollo-server");

const authUserType = gql`
  type AuthUser {
    id: ID
    email: String  
    name: String
    lastname: String
    token: String
  }
`;

module.exports = { authUserType };
