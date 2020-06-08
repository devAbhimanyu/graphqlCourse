import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
         id:ID!
         title: String!
         price:Float!
         releaseYear:Int
         rating:Float
         inStock:Boolean!
    }
 `;

const resolvers = {
  Query: {
    id() {
      return "absda213";
    },
    title() {
      return "jeevan kata";
    },
    price() {
      return 100.213;
    },
    releaseYear() {
      return;
    },
    rating() {
      return 4.3;
    },
    inStock() {
      return false;
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log("the server is up");
});
