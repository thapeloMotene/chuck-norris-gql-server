import express from 'express';
import { ApolloServer ,gql} from 'apollo-server-express';
const chuckService = require('./services/chuck-norries.service');

require('dotenv').config();

const app = express();

const schema = gql`
  type Query {

    categories: [Category],
    joke(category: String!): Joke
  }

  type Category{
    name: String!
}

type Joke {
    id: String,
    icon_url: String,
    url: String,
    value: String,
    created_at: String,
    updated_at: String,
    categories:[String]
}
`;
const resolvers = {
  Query: {

    joke: (parent, {category}) =>{
        return chuckService.getJoke(category);

    },
    categories: () =>{return chuckService.getCategories()},

  }
};




const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});


server.applyMiddleware({ app, path: '/graphql' });
app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});