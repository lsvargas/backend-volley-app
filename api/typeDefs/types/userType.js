const { gql } = require("apollo-server");

const userType = gql`
  type User {
    id: ID
    email: String  
    name: String
    lastname: String
    secondLastname: String
  }
`;

module.exports = { userType };
