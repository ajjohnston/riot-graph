// @flow

import {
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const SpellVarsType = new GraphQLObjectType({
  name: 'SpellVars',
  fields: () => ({
    ranksWith: {
      type: GraphQLString,
    },
    dyn: {
      type: GraphQLString,
    },
    link: {
      type: GraphQLString,
    },
    coeff: {
      type: new GraphQLList(GraphQLFloat),
    },
    key: {
      type: GraphQLString,
    },
  }),
})

export default SpellVarsType
