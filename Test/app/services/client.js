/* eslint-disable prettier/prettier */
import { ApolloClient, InMemoryCache } from '@apollo/client';
import getAllFilms from './FilmsQueries';
import getAllPlanets from './PlanetsQueries';
const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
});
const getFilmsData = async () => {
    const query = getAllFilms;
    return await client.query({ query });
};
const getPlanetsData = async () => {
    const query = getAllPlanets;
    return await client.query({ query });
};
export { getFilmsData, getPlanetsData, client };
