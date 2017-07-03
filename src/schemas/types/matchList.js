// @flow
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import ChampionType from './champion'
import MatchType from './match'
import { type Loaders } from '../../loaders/loaders'

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
      resolve: ({ gameId }: { gameId: string }, _: any, { loaders }: { loaders: Loaders}) =>
        loaders.match.load(gameId),
    },
    champion: {
      type: ChampionType,
      resolve: ({ champion }: { champion: string }, _: any, { loaders }: { loaders: Loaders}) =>
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
