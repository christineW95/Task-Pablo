import { gql } from '@apollo/client';
const query = gql`
  {
    allFilms {
      films {
        title
        episodeID
        director
      }
    }
  }
`;
export default query;
