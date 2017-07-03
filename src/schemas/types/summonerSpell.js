// @flow
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import ImageType, { IMAGE_TYPES } from './common/image'
import LevelTipType from './common/levelTip'

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

const SummonerSpellType = new GraphQLObjectType({
  name: 'SummonerSpell',
  fields: () => ({
    vars: {
      type: new GraphQLList(SpellVarsType),
    },
    image: {
      type: ImageType(IMAGE_TYPES.SPELL),
    },
    costBurn: {
      type: GraphQLString,
    },
    cooldown: {
      type: new GraphQLList(GraphQLFloat),
    },
    effectBurn: {
      type: new GraphQLList(GraphQLString),
    },
    id: {
      type: GraphQLInt,
    },
    cooldownBurn: {
      type: GraphQLString,
    },
    tooltip: {
      type: GraphQLString,
    },
    maxrank: {
      type: GraphQLInt,
    },
    rangeBurn: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    effect: {
      type: new GraphQLList(new GraphQLList(GraphQLFloat)),
    },
    key: {
      type: GraphQLString,
    },
    leveltip: {
      type: LevelTipType,
    },
    modes: {
      type: new GraphQLList(GraphQLString),
    },
    resource: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    costType: {
      type: GraphQLString,
    },
    sanitizedDescription: {
      type: GraphQLString,
    },
    sanitizedTooltip: {
      type: GraphQLString,
    },
    range: {
      type: new GraphQLList(GraphQLInt), // TODO: Handle 'self' strings
    },
    cost: {
      type: new GraphQLList(GraphQLInt),
    },
    summonerLevel: {
      type: GraphQLInt,
    },
  }),
})

export default SummonerSpellType
