// @flow
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql'
import ChampionType from './champion'
import { type Loaders } from '../../loaders/loaders'

const ChampionMasteryType = new GraphQLObjectType({
  name: 'ChampionMastery',
  fields: () => ({
    chestGranted: {
      type: GraphQLBoolean,
      description: 'Is chest granted for this champion or not in current season.',
    },
    championLevel: {
      type: GraphQLInt,
      description: 'Champion level for specified player and champion combination.',
    },
    championPoints: {
      type: GraphQLInt,
      description: 'Total number of champion points for this player and champion combination - they are used to determine championLevel.',
    },
    championId: {
      type: GraphQLFloat,
      description: 'Champion ID for this entry.',
    },
    champion: {
      type: ChampionType,
      description: 'Champion for this entry.',
      resolve: ({ championId }: { championId: number },
        _: any, { loaders }: { loaders: Loaders }) =>
        loaders.champion.load(championId),
    },
    playerId: {
      type: GraphQLFloat,
      description: 'Player ID for this entry.',
    },
    championPointsUntilNextLevel: {
      type: GraphQLFloat,
      description: 'Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.',
    },
    championPointsSinceLastLevel: {
      type: GraphQLFloat,
      description: 'Number of points earned since current level has been achieved. Zero if player reached maximum champion level for this champion.',
    },
    lastPlayTime: {
      type: GraphQLFloat,
      description: 'Last time this champion was played by this player - in Unix milliseconds time format.',
    },
  }),
})

export default ChampionMasteryType
