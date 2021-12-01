import { gql } from '@apollo/client';
const getAllPlanets = gql`
  {
    allPlanets{
    planets{
      id
      name
    }
  }
  }
`;
export default getAllPlanets;
