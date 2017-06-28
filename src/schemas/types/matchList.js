import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import ChampionType from './champion'
import MatchType from './match'

const MatchReferenceType = new GraphQLObjectType({
  name: 'MatchReference',
  description: 'MatchReference v3',
  fields: () => ({
    lane: {
      type: GraphQLString,
    },
    gameId: {
      type: GraphQLFloat,
    },
    match: {
      type: MatchType,
      resolve: ({ gameId }, _, { loaders }) =>
        loaders.match.load(gameId),
    },
    champion: {
      type: ChampionType,
      resolve: ({ champion }, _, { loaders }) =>
        loaders.champion.load(champion),
    },
    platformId: {
      type: GraphQLString,
    },
    season: {
      type: GraphQLInt,
    },
    queue: {
      type: GraphQLInt,
    },
    role: {
      type: GraphQLString,
    },
    timestamp: {
      type: GraphQLInt,
    },
  }),
})

export default new GraphQLObjectType({
  name: 'MatchList',
  description: 'MatchList v3',
  fields: () => ({
    matches: {
      type: new GraphQLList(MatchReferenceType),
    },
    totalGames: {
      type: GraphQLInt,
    },
    startIndex: {
      type: GraphQLInt,
    },
    endIndex: {
      type: GraphQLInt,
    },
  }),
})
