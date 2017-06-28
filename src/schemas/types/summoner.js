import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import MatchListType from './matchList'

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
      resolve: ({ accountId }, _, { loaders }) =>
        loaders.matchList.load(accountId),
    },
  }),
})
