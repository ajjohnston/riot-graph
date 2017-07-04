// @flow
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import ImageType, { IMAGE_TYPES } from './common/image'
import LevelTipType from './common/levelTip'
import SpellVarsType from './common/spellVars'

const InfoType = new GraphQLObjectType({
  name: 'ChampionInfo',
  fields: () => ({
    difficulty: {
      type: GraphQLInt,
    },
    attack: {
      type: GraphQLInt,
    },
    defense: {
      type: GraphQLInt,
    },
    magic: {
      type: GraphQLInt,
    },
  }),
})

const ChampionStatsType = new GraphQLObjectType({
  name: 'ChampionStats',
  fields: () => ({
    armorperlevel: {
      type: GraphQLFloat,
    },
    hpperlevel: {
      type: GraphQLFloat,
    },
    attackdamage: {
      type: GraphQLFloat,
    },
    mpperlevel: {
      type: GraphQLFloat,
    },
    attackspeedoffset: {
      type: GraphQLFloat,
    },
    armor: {
      type: GraphQLFloat,
    },
    hp: {
      type: GraphQLFloat,
    },
    hpregenperlevel: {
      type: GraphQLFloat,
    },
    spellblock: {
      type: GraphQLFloat,
    },
    attackrange: {
      type: GraphQLFloat,
    },
    movespeed: {
      type: GraphQLFloat,
    },
    attackdamageperlevel: {
      type: GraphQLFloat,
    },
    mpregenperlevel: {
      type: GraphQLFloat,
    },
    mp: {
      type: GraphQLFloat,
    },
    spellblockperlevel: {
      type: GraphQLFloat,
    },
    crit: {
      type: GraphQLFloat,
    },
    mpregen: {
      type: GraphQLFloat,
    },
    attackspeedperlevel: {
      type: GraphQLFloat,
    },
    hpregen: {
      type: GraphQLFloat,
    },
    critperlevel: {
      type: GraphQLFloat,
    },
  }),
})

const ChampionSkinType = new GraphQLObjectType({
  name: 'ChampionSkin',
  fields: () => ({
    num: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLInt,
    },
  }),
})

const ChampionPassiveType = new GraphQLObjectType({
  name: 'ChampionPassive',
  fields: () => ({
    image: {
      type: ImageType(IMAGE_TYPES.PASSIVE),
    },
    sanitizedDescription: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  }),
})

const ChampionSpellType = new GraphQLObjectType({
  name: 'ChampionSpell',
  fields: () => ({
    cooldownBurn: {
      type: GraphQLString,
    },
    resource: {
      type: GraphQLString,
    },
    leveltip: {
      type: LevelTipType,
    },
    vars: {
      type: new GraphQLList(SpellVarsType),
    },
    costType: {
      type: GraphQLString,
    },
    image: {
      type: ImageType(IMAGE_TYPES.SPELL),
    },
    sanitizedDescription: {
      type: GraphQLString,
    },
    sanitizedTooltip: {
      type: GraphQLString,
    },
    effect: {
      type: new GraphQLList(new GraphQLList(GraphQLFloat)),
    },
    tooltip: {
      type: GraphQLString,
    },
    maxrank: {
      type: GraphQLInt,
    },
    costBurn: {
      type: GraphQLString,
    },
    rangeBurn: {
      type: GraphQLString,
    },
    range: {
      type: new GraphQLList(GraphQLInt), // TODO: Handle 'self' strings
    },
    cooldown: {
      type: new GraphQLList(GraphQLFloat),
    },
    cost: {
      type: new GraphQLList(GraphQLInt),
    },
    key: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    effectBurn: {
      type: new GraphQLList(GraphQLString),
    },
    altimages: {
      type: new GraphQLList(ImageType(IMAGE_TYPES.SPELL)),
    },
    name: {
      type: GraphQLString,
    },
  }),
})

const ChampionBlockItemType = new GraphQLObjectType({
  name: 'ChampionBlockItem',
  fields: () => ({
    count: {
      type: GraphQLInt,
    },
    id: {
      type: GraphQLInt,
    },
  }),
})

const ChampionBlockType = new GraphQLObjectType({
  name: 'ChampionBlock',
  definition: 'Champion recommended block data',
  fields: () => ({
    items: {
      type: new GraphQLList(ChampionBlockItemType),
    },
    recMath: {
      type: GraphQLBoolean,
    },
    type: {
      type: GraphQLString,
    },
  }),
})

const ChampionRecommendedType = new GraphQLObjectType({
  name: 'ChampionRecommended',
  definition: 'Champion recommended data',
  fields: () => ({
    map: {
      type: GraphQLString,
    },
    blocks: {
      type: new GraphQLList(ChampionBlockType),
    },
    champion: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    priority: {
      type: GraphQLBoolean,
    },
    mode: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLString,
    },
  }),
})

export default new GraphQLObjectType({
  name: 'Champion',
  description: 'Champion v3',
  fields: () => ({
    info: {
      type: InfoType,
    },
    enemyTips: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ enemytips }: { enemytips: Array<string>}) => enemytips,
    },
    stats: {
      type: ChampionStatsType,
    },
    name: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    image: {
      type: ImageType(IMAGE_TYPES.CHAMPION),
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    partype: {
      type: GraphQLString,
    },
    skins: {
      type: new GraphQLList(ChampionSkinType),
    },
    passive: {
      type: ChampionPassiveType,
    },
    recommended: {
      type: new GraphQLList(ChampionRecommendedType),
    },
    allyTips: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ allytips }: { allytips: Array<string>}) => allytips,
    },
    key: {
      type: GraphQLString,
    },
    lore: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLInt,
    },
    blurb: {
      type: GraphQLString,
    },
    spells: {
      type: new GraphQLList(ChampionSpellType),
    },
  }),
})
