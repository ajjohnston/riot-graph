import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

export const ImageType = new GraphQLObjectType({
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

export const LevelTipType = new GraphQLObjectType({
  name: 'ChampionLevelTip',
  fields: () => ({
    effect: {
      type: new GraphQLList(GraphQLString),
    },
    label: {
      type: new GraphQLList(GraphQLString),
    },
  }),
})
