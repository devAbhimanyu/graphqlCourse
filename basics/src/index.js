import { GraphQLServer } from "graphql-yoga";

// creating custom types

const typeDefs = `
    type Query {
        greeting(name:String, position:String):String!
        me:User!,
        post:Post!,
        add(num1:Float!,num2:Float!):Float!
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
    add(p, args) {
      const { num1, num2 } = args;
      return num1 + num2;
    },
    greeting(parent, args, cxt) {
      console.log(parent, args, cxt);
      if (args.name && args.position) {
        return `Hey ${args.name}, you the best ${args.position}`;
      } else {
        return "hey whats your name??";
      }
    },
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
