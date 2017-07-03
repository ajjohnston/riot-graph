// @flow
import {
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import ImageType, { IMAGE_TYPES } from './common/image'

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
      type: ImageType(IMAGE_TYPES.MAP),
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
