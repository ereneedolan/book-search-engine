import { gql } from '@apollo/client';

export const ADD_MATCHUP = gql`
  mutation createMatchups ($tech1: String!, $tech2: String!,) {
    createMatchup (tech1: $tech1, tech2: $tech2,){
      
      }
    }
`;

export const ADD_VOTE = gql`
  mutation createVote () {
    createVote (){
     
      }
    }
`;
