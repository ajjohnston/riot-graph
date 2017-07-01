import {
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { ImageType } from './common'

const MapDetailsType = new GraphQLObjectType({
  name: 'MapDetails',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    mapName: {
      type: GraphQLString,
    },
    image: {
      type: ImageType,
    },
    mapId: {
      type: GraphQLFloat,
    },
    unpurchasableItemList: {
      type: new GraphQLList(GraphQLFloat),
    },
  }),
})

export default MapDetailsType
