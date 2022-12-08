import { gql } from '@apollo/client';

export const QUERY_ALL_TECH = gql`
  query GetAllTech {
    getAllTech {
      name
      }
    }
`;

export const QUERY_ALL_MATCHUPS = gql`
  query GetAllMatchups {
    getAllMatchups {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
      }
    }
`;

export const QUERY_MATCHUP = gql`
  query GetMatchups ($matchupId: ID!) {
    getMatchup (matchupId: $matchupId){
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
      }
    }
`;