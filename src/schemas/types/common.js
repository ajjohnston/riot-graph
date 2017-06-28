import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    full: {
      type: GraphQLString,
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

export default ImageType
