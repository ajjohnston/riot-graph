// @flow

import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const LevelTipType = new GraphQLObjectType({
  name: 'LevelTip',
  fields: () => ({
    effect: {
      type: new GraphQLList(GraphQLString),
    },
    label: {
      type: new GraphQLList(GraphQLString),
    },
  }),
})

export default LevelTipType
