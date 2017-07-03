const QUEUE_TYPES = {
  0: {
    configId: 'CUSTOM',
    name: 'Custom',
  },
  2: {
    configId: 'NORMAL_5x5_BLIND',
    name: 'Normal 5v5 Blind Pick',
  },
  4: {
    configId: 'RANKED_SOLO_5x5',
    name: 'Ranked Solo 5v5',
  },
  6: {
    configId: 'RANKED_PREMADE_5x5',
    name: 'Ranked Premade 5v5',
  },
  7: {
    configId: 'BOT_5x5',
    name: 'Historical Summoner\'s Rift Coop vs AI',
  },
  8: {
    configId: 'NORMAL_3x3',
    name: 'Normal 3v3',
  },
  9: {
    configId: 'RANKED_PREMADE_3x3',
    name: 'Ranked Premade 3v3',
  },
  14: {
    configId: 'NORMAL_5x5_DRAFT',
    name: 'Normal 5v5 Draft Pick',
  },
  16: {
    configId: 'ODIN_5x5_BLIND',
    name: 'Dominion 5v5 Blind Pick',
  },
  17: {
    configId: 'ODIN_5x5_DRAFT',
    name: 'Dominion 5v5 Draft Pick',
  },
  25: {
    configId: 'BOT_ODIN_5x5',
    name: 'Dominion Coop vs AI',
  },
  31: {
    configId: 'BOT_5x5_INTRO',
    name: 'Summoner\'s Rift Coop vs AI Intro Bot',
  },
  32: {
    configId: 'BOT_5x5_BEGINNER',
    name: 'Summoner\'s Rift Coop vs AI Beginner Bot',
  },
  33: {
    configId: 'BOT_5x5_INTERMEDIATE',
    name: 'Historical Summoner\'s Rift Coop vs AI Intermediate Bot',
  },
  41: {
    configId: 'RANKED_TEAM_3x3',
    name: 'Ranked Team 3v3',
  },
  42: {
    configId: 'RANKED_TEAM_5x5',
    name: 'Ranked Team 5v5',
  },
  52: {
    configId: 'BOT_TT_3x3',
    name: 'Twisted Treeline Coop vs AI',
  },
  61: {
    configId: 'GROUP_FINDER_5x5',
    name: 'Team Builder',
  },
  65: {
    configId: 'ARAM_5x5',
    name: 'ARAM',
  },
  70: {
    configId: 'ONEFORALL_5x5',
    name: 'One for All',
  },
  72: {
    configId: 'FIRSTBLOOD_1x1',
    name: 'Snowdown Showdown 1v1',
  },
  73: {
    configId: 'FIRSTBLOOD_2x2',
    name: 'Snowdown Showdown 2v2',
  },
  75: {
    configId: 'SR_6x6',
    name: 'Summoner\'s Rift 6x6 Hexakill',
  },
  76: {
    configId: 'URF_5x5',
    name: 'Ultra Rapid Fire',
  },
  78: {
    configId: 'ONEFORALL_MIRRORMODE_5x5',
    name: 'One for All',
  },
  83: {
    configId: 'BOT_URF_5x5',
    name: 'Ultra Rapid Fire played against AI',
  },
  91: {
    configId: 'NIGHTMARE_BOT_5x5_RANK1',
    name: 'Doom Bots Rank 1',
  },
  92: {
    configId: 'NIGHTMARE_BOT_5x5_RANK2',
    name: 'Doom Bots Rank 2',
  },
  93: {
    configId: 'NIGHTMARE_BOT_5x5_RANK5',
    name: 'Doom Bots Rank 5',
  },
  96: {
    configId: 'ASCENSION_5x5',
    name: 'Ascension',
  },
  98: {
    configId: 'HEXAKILL',
    name: 'Twisted Treeline 6x6 Hexakill',
  },
  100: {
    configId: 'BILGEWATER_ARAM_5x5',
    name: 'Butcher\'s Bridge',
  },
  300: {
    configId: 'KING_PORO_5x5',
    name: 'King Poro',
  },
  310: {
    configId: 'COUNTER_PICK',
    name: 'Nemesis',
  },
  313: {
    configId: 'BILGEWATER_5x5',
    name: 'Black Market Brawlers',
  },
  315: {
    configId: 'SIEGE',
    name: 'Nexus Siege',
  },
  317: {
    configId: 'DEFINITELY_NOT_DOMINION_5x5',
    name: 'Definitely Not Dominion',
  },
  318: {
    configId: 'ARURF_5X5',
    name: 'All Random URF',
  },
  325: {
    configId: 'ARSR_5x5',
    name: 'All Random Summoner\'s Rift',
  },
  400: {
    configId: 'TEAM_BUILDER_DRAFT_UNRANKED_5x5',
    name: 'Normal 5v5 Draft Pick',
  },
  410: {
    configId: 'TEAM_BUILDER_DRAFT_RANKED_5x5',
    name: 'Ranked 5v5 Draft Pick',
  },
  420: {
    configID: 'TEAM_BUILDER_RANKED_SOLO',
    name: 'Ranked Solo from current season that use Team Builder matchmaking',
  },
  430: {
    configID: 'TB_BLIND_SUMMONERS_RIFT_5x5',
    name: 'Normal 5v5 Blind Pick',
  },
  440: {
    configId: 'RANKED_FLEX_SR',
    name: 'Ranked Flex Summoner\'s Rift',
  },
  600: {
    configId: 'ASSASSINATE_5x5',
    name: 'Blood Hunt Assassin',
  },
  610: {
    configId: 'DARKSTAR_3x3',
    name: 'Dark Star',
  },
}

export default QUEUE_TYPES
