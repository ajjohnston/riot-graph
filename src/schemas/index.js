import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql'

import ChampionType from './types/champion'
import ItemType from './types/item'
import MatchType from './types/match'
import SummonerType from './types/summoner'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    champion: {
      type: ChampionType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_, { id }, { loaders }) => loaders.champion.load(id),
    },
    item: {
      type: ItemType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (_, { id }, { loaders }) => loaders.item.load(id),
    },
    match: {
      type: MatchType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLFloat),
        },
      },
      resolve: (_, { id }, { loaders }) => loaders.match.load(id),
    },
    summoner: {
      type: SummonerType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_, { name }, { loaders }) => loaders.summonerByName.load(name),
    },
  }),
})

export default new GraphQLSchema({
  query: QueryType,
})
