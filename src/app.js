// require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: [
      "https://www.wildvoley.cl",
      "http://localhost:3000",
      "https://wildvoley.cl"
    ]
  }
});



server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
