/* eslint-disable prettier/prettier */
import { ApolloClient, InMemoryCache } from '@apollo/client';
import query from './FilmsQueries';
const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
});
const getData = async () => {
    return await client.query({ query });
};
export default getData;
