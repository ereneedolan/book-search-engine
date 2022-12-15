const { Matchup, Tech } = require('../models');

const resolvers = {
  Query: {
    getAllTech: async (parent) => {
      return await Tech.find({});
    },
    getAllMatchups: async (parent) => {
      return await Matchup.find({});
    },
    getMatchup: async (parent, {matchupId}) => {
      return await Matchup.findOne({ _id: matchupId });
    },
  },

  Mutation: {
    createMatchup: async (parent, { tech1, tech2}) => {
      const matchup = await Matchup.create({ tech1, tech2 });
      return matchup;
    },
    createVote: async (parent, { matchupId, techType}) => {
      const matchup = await Matchup.findOneAndUpdate(
        { _id: matchupId },
        { $inc: { [`tech${techType}_votes`]: 1 } },
        { new: true }
      );
      return matchup;
    },
  },
};

module.exports = resolvers;
