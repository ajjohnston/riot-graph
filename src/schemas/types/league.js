// @flow
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const MiniSeriesType = new GraphQLObjectType({
  name: 'MiniSeries',
  fields: () => ({
    wins: {
      type: GraphQLInt,
    },
    losses: {
      type: GraphQLInt,
    },
    target: {
      type: GraphQLInt,
    },
    progress: {
      type: GraphQLString,
    },
  }),
})

const LeaguePositionType = new GraphQLObjectType({
  name: 'LeaguePosition',
  fields: () => ({
    rank: {
      type: GraphQLString,
    },
    queueType: {
      type: GraphQLString,
    },
    hotStreak: {
      type: GraphQLBoolean,
    },
    miniSeries: {
      type: MiniSeriesType,
    },
    wins: {
      type: GraphQLInt,
    },
    veteran: {
      type: GraphQLBoolean,
    },
    losses: {
      type: GraphQLInt,
    },
    playerOrTeamId: {
      type: GraphQLString,
    },
    leagueName: {
      type: GraphQLString,
    },
    playerOrTeamName: {
      type: GraphQLString,
    },
    inactive: {
      type: GraphQLBoolean,
    },
    freshBlood: {
      type: GraphQLBoolean,
    },
    tier: {
      type: GraphQLString,
    },
    leaguePoints: {
      type: GraphQLInt,
    },
  }),
})

export default LeaguePositionType
