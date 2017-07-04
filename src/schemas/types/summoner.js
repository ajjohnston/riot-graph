// @flow
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import MatchListType from './matchList'
import LeaguePositionType from './league'
import { IMAGE_HOST } from '../../constants/hosts'
import { type Loaders } from '../../loaders/loaders'

export default new GraphQLObjectType({
  name: 'Summoner',
  description: 'Summoner v3',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'Summoner ID',
    },
    accountId: {
      type: GraphQLInt,
      description: 'Account ID',
    },
    name: {
      type: GraphQLString,
      description: 'Summoner name',
    },
    profileIconId: {
      type: GraphQLInt,
      description: 'ID of the summoner icon associated with the summoner',
    },
    profileIcon: {
      type: GraphQLString,
      description: 'URL to the summoner icon associated with the summoner',
      resolve: ({ profileIconId }: { profileIconId: number }) => `${IMAGE_HOST}/profileicon/${profileIconId}.png`,
    },
    revisionDate: {
      type: GraphQLInt,
      description: 'Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change',
    },
    summonerLevel: {
      type: GraphQLInt,
      description: 'Summoner level associated with the summoner',
    },
    matchList: {
      type: MatchListType,
      description: 'Games played by this summoner',
      args: {
        start: {
          type: GraphQLFloat,
        },
        count: {
          type: GraphQLFloat,
        },
      },
      resolve: ({ accountId }: { accountId: number },
        { start, count }: { start: number, count: number },
        { loaders }: { loaders: Loaders }) =>
        loaders.matchList(start, count).load(accountId),
    },
    leaguePositions: {
      type: new GraphQLList(LeaguePositionType),
      description: 'League positions for this summoner',
      resolve: ({ id }: { id: number },
        _: any,
        { loaders }: { loaders: Loaders }) =>
        loaders.league.load(id),
    },
  }),
})
