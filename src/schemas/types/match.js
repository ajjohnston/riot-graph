
// @flow
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import { get } from 'lodash'
import ChampionType from './champion'
import ItemType from './item'
import MapDetailsType from './map'
import SummonerType from './summoner'
import SummonerSpellType from './summonerSpell'
import QUEUE_TYPES from '../../constants/queues'
import { type Loaders } from '../../loaders/loaders'

const PlayerType = new GraphQLObjectType({
  name: 'Player',
  fields: () => ({
    currentPlatformId: {
      type: GraphQLString,
    },
    summonerName: {
      type: GraphQLString,
    },
    matchHistoryUri: {
      type: GraphQLString,
    },
    platformId: {
      type: GraphQLString,
    },
    currentAccountId: {
      type: GraphQLFloat,
    },
    profileIcon: {
      type: GraphQLInt,
    },
    summonerId: {
      type: GraphQLFloat,
    },
    accountId: {
      type: GraphQLFloat,
    },
    summoner: {
      type: SummonerType,
      resolve: ({ accountId }: { accountId: string}, _: any, { loaders }: { loaders: Object }) =>
        loaders.summoner.load(accountId),
    },
  }),
})

const RuneType = new GraphQLObjectType({
  name: 'Rune',
  fields: () => ({
    runeId: {
      type: GraphQLInt,
    },
    rank: {
      type: GraphQLInt,
    },
  }),
})

const MasteryType = new GraphQLObjectType({
  name: 'Mastery',
  fields: () => ({
    masteryId: {
      type: GraphQLInt,
    },
    rank: {
      type: GraphQLInt,
    },
  }),
})

const ParticipantIdentityType = new GraphQLObjectType({
  name: 'ParticipantIdentity',
  fields: () => ({
    player: {
      type: PlayerType,
    },
    participantId: {
      type: GraphQLInt,
    },
  }),
})

const ParticipantStatsType = new GraphQLObjectType({
  name: 'ParticipantStats',
  fields: () => ({
    physicalDamageDealt: {
      type: GraphQLFloat,
    },
    neutralMinionsKilledTeamJungle: {
      type: GraphQLInt,
    },
    magicDamageDealt: {
      type: GraphQLFloat,
    },
    totalPlayerScore: {
      type: GraphQLInt,
    },
    deaths: {
      type: GraphQLInt,
    },
    win: {
      type: GraphQLBoolean,
    },
    neutralMinionsKilledEnemyJungle: {
      type: GraphQLInt,
    },
    altarsCaptured: {
      type: GraphQLInt,
    },
    largestCriticalStrike: {
      type: GraphQLInt,
    },
    totalDamageDealt: {
      type: GraphQLFloat,
    },
    magicDamageDealtToChampions: {
      type: GraphQLFloat,
    },
    visionWardsBoughtInGame: {
      type: GraphQLInt,
    },
    damageDealtToObjectives: {
      type: GraphQLFloat,
    },
    largestKillingSpree: {
      type: GraphQLInt,
    },
    quadraKills: {
      type: GraphQLInt,
    },
    teamObjective: {
      type: GraphQLInt,
    },
    totalTimeCrowdControlDealt: {
      type: GraphQLInt,
    },
    longestTimeSpentLiving: {
      type: GraphQLInt,
    },
    wardsKilled: {
      type: GraphQLInt,
    },
    firstTowerAssist: {
      type: GraphQLBoolean,
    },
    firstTowerKill: {
      type: GraphQLBoolean,
    },
    item0: {
      type: ItemType,
      resolve: ({ item0 }: { item0: number}, _: any, { loaders }: { loaders: Loaders }) =>
        loaders.item.load(item0),
    },
    item1: {
      type: ItemType,
      resolve: ({ item1 }: { item1: number}, _: any, { loaders }: { loaders: Loaders }) =>
        loaders.item.load(item1),
    },
    item2: {
      type: ItemType,
      resolve: ({ item2 }: { item2: number}, _: any, { loaders }: { loaders: Loaders }) =>
        loaders.item.load(item2),
    },
    item3: {
      type: ItemType,
      resolve: ({ item3 }: { item3: number}, _: any, { loaders }: { loaders: Loaders }) =>
        loaders.item.load(item3),
    },
    item4: {
      type: ItemType,
      resolve: ({ item4 }: { item4: number}, _: any, { loaders }: { loaders: Loaders }) =>
        loaders.item.load(item4),
    },
    item5: {
      type: ItemType,
      resolve: ({ item5 }: { item5: number}, _: any, { loaders }: { loaders: Loaders }) =>
        loaders.item.load(item5),
    },
    item6: {
      type: ItemType,
      resolve: ({ item6 }: { item6: number}, _: any, { loaders }: { loaders: Loaders }) =>
        loaders.item.load(item6),
    },
    firstBloodAssist: {
      type: GraphQLBoolean,
    },
    visionScore: {
      type: GraphQLFloat,
    },
    wardsPlaced: {
      type: GraphQLInt,
    },
    turretKills: {
      type: GraphQLInt,
    },
    tripleKills: {
      type: GraphQLInt,
    },
    damageSelfMitigated: {
      type: GraphQLFloat,
    },
    champLevel: {
      type: GraphQLInt,
    },
    nodeNeutralizeAssist: {
      type: GraphQLInt,
    },
    firstInhibitorKill: {
      type: GraphQLBoolean,
    },
    goldEarned: {
      type: GraphQLInt,
    },
    magicalDamageTaken: {
      type: GraphQLFloat,
    },
    kills: {
      type: GraphQLInt,
    },
    doubleKills: {
      type: GraphQLInt,
    },
    nodeCaptureAssist: {
      type: GraphQLInt,
    },
    trueDamageTaken: {
      type: GraphQLFloat,
    },
    nodeNeutralize: {
      type: GraphQLInt,
    },
    firstInhibitorAssist: {
      type: GraphQLBoolean,
    },
    assists: {
      type: GraphQLInt,
    },
    unrealKills: {
      type: GraphQLInt,
    },
    neutralMinionsKilled: {
      type: GraphQLInt,
    },
    objectivePlayerScore: {
      type: GraphQLInt,
    },
    combatPlayerScore: {
      type: GraphQLInt,
    },
    damageDealtToTurrets: {
      type: GraphQLFloat,
    },
    altarsNeutralized: {
      type: GraphQLInt,
    },
    physicalDamageDealtToChampions: {
      type: GraphQLFloat,
    },
    goldSpent: {
      type: GraphQLInt,
    },
    trueDamageDealt: {
      type: GraphQLFloat,
    },
    trueDamageDealtToChampions: {
      type: GraphQLFloat,
    },
    participantId: {
      type: GraphQLInt,
    },
    pentaKills: {
      type: GraphQLInt,
    },
    totalHeal: {
      type: GraphQLFloat,
    },
    totalMinionsKilled: {
      type: GraphQLInt,
    },
    firstBloodKill: {
      type: GraphQLBoolean,
    },
    nodeCapture: {
      type: GraphQLInt,
    },
    largestMultiKill: {
      type: GraphQLInt,
    },
    sightWardsBoughtInGame: {
      type: GraphQLInt,
    },
    totalDamageDealtToChampions: {
      type: GraphQLFloat,
    },
    totalUnitsHealed: {
      type: GraphQLInt,
    },
    inhibitorKills: {
      type: GraphQLInt,
    },
    totalScoreRank: {
      type: GraphQLInt,
    },
    totalDamageTaken: {
      type: GraphQLFloat,
    },
    killingSprees: {
      type: GraphQLInt,
    },
    timeCCingOthers: {
      type: GraphQLFloat,
    },
    physicalDamageTaken: {
      type: GraphQLFloat,
    },
  }),
})

const ParticipantTimelineType = new GraphQLObjectType({
  name: 'ParticipantTimeline',
  fields: () => ({
    lane: {
      type: GraphQLString,
    },
    participantId: {
      type: GraphQLInt,
    },
    // csDiffPerMinDeltas Map[string, double]
    // goldPerMinDeltas Map[string, double]
    // xpDiffPerMinDeltas Map[string, double]
    // creepsPerMinDeltas Map[string, double]
    // xpPerMinDeltas Map[string, double]
    role: {
      type: GraphQLString,
    },
    // damageTakenDiffPerMinDeltas Map[string, double]
    // damageTakenPerMinDeltas Map[string, double]
  }),
})

const ParticipantType = new GraphQLObjectType({
  name: 'Participant',
  fields: () => ({
    stats: {
      type: ParticipantStatsType,
    },
    participantId: {
      type: GraphQLInt,
    },
    runes: {
      type: new GraphQLList(RuneType),
    },
    timeline: {
      type: ParticipantTimelineType,
    },
    teamId: {
      type: GraphQLInt,
    },
    masteries: {
      type: new GraphQLList(MasteryType),
    },
    highestAchievedSeasonTier: {
      type: GraphQLString,
    },
    summonerSpell1: {
      type: SummonerSpellType,
      resolve: ({ spell1Id }: { spell1Id: number }, _: any, { loaders }: { loaders: Loaders}) =>
        loaders.summonerSpell.load(spell1Id),
    },
    summonerSpell2: {
      type: SummonerSpellType,
      resolve: ({ spell2Id }: { spell2Id: number }, _: any, { loaders }: { loaders: Loaders}) =>
        loaders.summonerSpell.load(spell2Id),
    },
    champion: {
      type: ChampionType,
      resolve: ({ championId }: { championId: number }, _: any, { loaders }: { loaders: Loaders}) =>
        loaders.champion.load(championId),
    },
  }),
})

const TeamBansType = new GraphQLObjectType({
  name: 'TeamBans',
  fields: () => ({
    pickTurn: {
      type: GraphQLInt,
    },
    champion: {
      type: ChampionType,
      resolve: ({ championId }: { championId: number }, _: any, { loaders }: { loaders: Loaders}) =>
        loaders.champion.load(championId),
    },
  }),
})

const TeamStatsType = new GraphQLObjectType({
  name: 'TeamStats',
  fields: () => ({
    firstDragon: {
      type: GraphQLBoolean,
    },
    firstInhibitor: {
      type: GraphQLBoolean,
    },
    bans: {
      type: new GraphQLList(TeamBansType),
    },
    baronKills: {
      type: GraphQLInt,
    },
    firstRiftHerald: {
      type: GraphQLBoolean,
    },
    firstBaron: {
      type: GraphQLBoolean,
    },
    riftHeraldKills: {
      type: GraphQLInt,
    },
    firstBlood: {
      type: GraphQLBoolean,
    },
    teamId: {
      type: GraphQLInt,
    },
    firstTower: {
      type: GraphQLBoolean,
    },
    vilemawKills: {
      type: GraphQLInt,
    },
    inhibitorKills: {
      type: GraphQLInt,
    },
    towerKills: {
      type: GraphQLInt,
    },
    dominionVictoryScore: {
      type: GraphQLInt,
    },
    win: {
      type: GraphQLString,
    },
    dragonKills: {
      type: GraphQLInt,
    },
  }),
})

export default new GraphQLObjectType({
  name: 'Match',
  description: 'Match v3',
  fields: () => ({
    seasonId: {
      type: GraphQLInt,
    },
    queueId: {
      type: GraphQLInt,
    },
    queue: {
      type: GraphQLString,
      resolve: ({ queueId }: { queueId: number}) => get(QUEUE_TYPES, `${queueId}.name`),
    },
    gameId: {
      type: GraphQLFloat,
    },
    participantIdentities: {
      type: new GraphQLList(ParticipantIdentityType),
    },
    gameVersion: {
      type: GraphQLString,
    },
    platformId: {
      type: GraphQLString,
    },
    gameMode: {
      type: GraphQLString, // TODO: Make this an enum
    },
    map: {
      type: MapDetailsType,
      resolve: ({ mapId }: { mapId: number }, _: any, { loaders }: { loaders: Loaders}) =>
        loaders.map.load(mapId),
    },
    gameType: {
      type: GraphQLString, // TODO: Make this an enum
    },
    teams: {
      type: new GraphQLList(TeamStatsType),
    },
    participants: {
      type: new GraphQLList(ParticipantType),
    },
    gameDuration: {
      type: GraphQLInt,
    },
    gameCreation: {
      type: GraphQLFloat,
    },
  }),
})
