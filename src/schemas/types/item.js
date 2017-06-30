import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { ImageType } from './common'

const ItemGoldType = new GraphQLObjectType({
  name: 'ItemGold',
  fields: () => ({
    sell: {
      type: GraphQLInt,
    },
    total: {
      type: GraphQLInt,
    },
    base: {
      type: GraphQLInt,
    },
    purchasable: {
      type: GraphQLBoolean,
    },
  }),
})

const InventoryDataStatsType = new GraphQLObjectType({
  name: 'InventoryDataStats',
  fields: () => ({
    PercentCritDamageMod: {
      type: GraphQLFloat,
    },
    PercentSpellBlockMod: {
      type: GraphQLFloat,
    },
    PercentHPRegenMod: {
      type: GraphQLFloat,
    },
    PercentMovementSpeedMod: {
      type: GraphQLFloat,
    },
    FlatSpellBlockMod: {
      type: GraphQLFloat,
    },
    FlatCritDamageMod: {
      type: GraphQLFloat,
    },
    FlatEnergyPoolMod: {
      type: GraphQLFloat,
    },
    PercentLifeStealMod: {
      type: GraphQLFloat,
    },
    FlatMPPoolMod: {
      type: GraphQLFloat,
    },
    FlatMovementSpeedMod: {
      type: GraphQLFloat,
    },
    PercentAttackSpeedMod: {
      type: GraphQLFloat,
    },
    FlatBlockMod: {
      type: GraphQLFloat,
    },
    PercentBlockMod: {
      type: GraphQLFloat,
    },
    FlatEnergyRegenMod: {
      type: GraphQLFloat,
    },
    PercentSpellVampMod: {
      type: GraphQLFloat,
    },
    FlatMPRegenMod: {
      type: GraphQLFloat,
    },
    PercentDodgeMod: {
      type: GraphQLFloat,
    },
    FlatAttackSpeedMod: {
      type: GraphQLFloat,
    },
    FlatArmorMod: {
      type: GraphQLFloat,
    },
    FlatHPRegenMod: {
      type: GraphQLFloat,
    },
    PercentMagicDamageMod: {
      type: GraphQLFloat,
    },
    PercentMPPoolMod: {
      type: GraphQLFloat,
    },
    FlatMagicDamageMod: {
      type: GraphQLFloat,
    },
    PercentMPRegenMod: {
      type: GraphQLFloat,
    },
    PercentPhysicalDamageMod: {
      type: GraphQLFloat,
    },
    FlatPhysicalDamageMod: {
      type: GraphQLFloat,
    },
    PercentHPPoolMod: {
      type: GraphQLFloat,
    },
    PercentArmorMod: {
      type: GraphQLFloat,
    },
    PercentCritChanceMod: {
      type: GraphQLFloat,
    },
    PercentEXPBonus: {
      type: GraphQLFloat,
    },
    FlatHPPoolMod: {
      type: GraphQLFloat,
    },
    FlatCritChanceMod: {
      type: GraphQLFloat,
    },
    FlatEXPBonus: {
      type: GraphQLFloat,
    },
  }),
})

export default new GraphQLObjectType({
  name: 'Item',
  description: 'Item v3',
  fields: () => ({
    gold: {
      type: ItemGoldType,
    },
    plaintext: {
      type: GraphQLString,
    },
    hideFromAll: {
      type: GraphQLBoolean,
    },
    inStore: {
      type: GraphQLBoolean,
    },
    into: {
      type: new GraphQLList(GraphQLString),
    },
    id: {
      type: GraphQLInt,
    },
    stats: {
      type: InventoryDataStatsType,
    },
    colloq: {
      type: GraphQLString,
    },
    // maps Map[string, boolean] // TODO: Add the maps field
    specialRecipe: {
      type: GraphQLInt,
    },
    image: {
      type: ImageType,
    },
    description: {
      type: GraphQLString,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    // effect Map[string, string] // TODO: Add the effect field
    requiredChampion: {
      type: GraphQLString,
    },
    from: {
      type: new GraphQLList(GraphQLString),
    },
    group: {
      type: GraphQLString,
    },
    consumeOnFull: {
      type: GraphQLBoolean,
    },
    name: {
      type: GraphQLString,
    },
    consumed: {
      type: GraphQLBoolean,
    },
    sanitizedDescription: {
      type: GraphQLString,
    },
    depth: {
      type: GraphQLInt,
    },
    stacks: {
      type: GraphQLInt,
    },
  }),
})
