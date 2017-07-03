// @flow
import {
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
      resolve: ({ accountId }: { accountId: string }, _: any, { loaders }: { loaders: Loaders }) =>
        loaders.matchList.load(accountId),
    },
  }),
})
