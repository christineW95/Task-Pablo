import { gql } from '@apollo/client';
const getAllFilms = gql`
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
              id
            name
          }
        }
        created
        edited
      }
    }
  }
`;
export default getAllFilms;
