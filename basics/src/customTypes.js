import { GraphQLServer } from "graphql-yoga";

// creating custom types

const typeDefs = `
    type Query {
        me:User!,
        post:Post!
    }
    type User{
        id:ID!,
        name:String!,
        email:String!,
        age:Int,
        above18:Boolean
    }
    type Post{
        id:ID!,
        title:String!,
        body:String!,
        published:Int!,
    }
 `;

const resolvers = {
  Query: {
    me() {
      return {
        id: "1",
        name: "Abhinav",
        email: "tt",
        above18: true,
      };
    },
    post() {
      return {
        id: "1",
        title: "Abhinav",
        body: "tt",
        published: 123231,
      };
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log("the server is up");
});
