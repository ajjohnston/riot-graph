// @flow
import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import IMAGE_HOST from '../../../constants'

const imageTypes: Map<string, GraphQLObjectType> = new Map()

export const IMAGE_TYPES = {
  CHAMPION: 'Champion',
  ITEM: 'Item',
  MAP: 'Map',
  PASSIVE: 'Passive',
  SPELL: 'Spell',
}

const ImageType = (type: string): GraphQLObjectType => {
  const existingType = imageTypes.get(type)
  if (existingType) {
    return existingType
  }

  const imageType = new GraphQLObjectType({
    name: `${type}Image`,
    fields: () => ({
      full: {
        type: GraphQLString,
        resolve: ({ full }: { full: string }) => `${IMAGE_HOST}${type.toLowerCase()}/${full}`,
      },
      group: {
        type: GraphQLString,
      },
      sprite: {
        type: GraphQLString,
      },
      h: {
        type: GraphQLInt,
      },
      w: {
        type: GraphQLInt,
      },
      x: {
        type: GraphQLInt,
      },
      y: {
        type: GraphQLInt,
      },
    }),
  })

  imageTypes.set(type, imageType)
  return imageType
}

export default ImageType
