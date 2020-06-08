import { GraphQLServer } from "graphql-yoga";

// creating custom types

const typeDefs = `
    type Query {
        greeting(name:String, position:String):String!
        add(num1:Float!,num2:Float!):Float!
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
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log("the server is up");
});
