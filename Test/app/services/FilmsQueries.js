import { gql } from '@apollo/client';
const query = gql`
  {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        planetConnection {
          totalCount
          planets {
            name
            population
          }
        }
        created
        edited
      }
    }
  }
`;
export default query;
