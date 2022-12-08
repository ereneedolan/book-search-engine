const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    name: String
  }

  type Matchup {
    _id: ID
    tech1: String
    tech1: String
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    getAllTech: [Tech]!
    getAllMatchups: [Matchup]!
    getMatchup(matchupId: ID!): Matchup
  }

  type Mutation {
    CreateMatchup(
      tech1: String!, 
      tech2: String!,
      tech1_votes: Int, 
      tech2_votes: Int):Matchup

    CreateVote(
      matchupId: ID!, 
      techType: Int):Matchup
  }
`;

module.exports = typeDefs;
