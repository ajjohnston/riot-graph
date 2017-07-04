// @flow
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import MatchListType from './matchList'
import { type Loaders } from '../../loaders/loaders'

export default new GraphQLObjectType({
  name: 'Summoner',
  description: 'Summoner v3',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    accountId: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    profileIconId: {
      type: GraphQLInt,
    },
    revisionDate: {
      type: GraphQLInt,
    },
    summonerLevel: {
      type: GraphQLInt,
    },
    matchList: {
      type: MatchListType,
      args: {
        start: {
          type: GraphQLFloat,
        },
        count: {
          type: GraphQLFloat,
        },
      },
      resolve: ({ accountId }: { accountId: string },
        { start, count }: { start: number, count: number },
        { loaders }: { loaders: Loaders }) =>
        loaders.matchList(start, count).load(accountId),
    },
  }),
})
