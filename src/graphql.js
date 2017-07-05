// @flow
import graphqlHTTP from 'express-graphql'
import riotSchema from './schemas'
import championLoader from './loaders/champion'
import championMasteryLoader from './loaders/championMastery'
import itemLoader from './loaders/item'
import leagueLoader from './loaders/league'
import mapLoader from './loaders/map'
import matchLoader from './loaders/match'
import matchListLoader from './loaders/matchList'
import summonerLoader from './loaders/summoner'
import summonerByNameLoader from './loaders/summonerByName'
import summonerSpellLoader from './loaders/summonerSpell'

import { type Loaders } from './loaders/loaders'
import { type Region } from './constants/regions'

import config from '../config.json'

const RIOT_TOKEN_HEADER = 'X-Riot-Token'
const REGION_HEADER = 'X-Riot-Region'

export default function () {
  const opts = (request: Object) => {
    const apiKey = request.get(RIOT_TOKEN_HEADER)

    const region : Region = request.get(REGION_HEADER) || config.API.REGION

    const loaders: Loaders = {
      champion: championLoader(region, apiKey),
      championMastery: championMasteryLoader(region, apiKey),
      item: itemLoader(region, apiKey),
      leaguePositions: leagueLoader(region, apiKey),
      map: mapLoader(region, apiKey),
      match: matchLoader(region, apiKey),
      matchList: matchListLoader(region, apiKey),
      summoner: summonerLoader(region, apiKey),
      summonerByName: summonerByNameLoader(region, apiKey),
      summonerSpell: summonerSpellLoader(region, apiKey),
    }

    return {
      schema: riotSchema,
      graphiql: true,
      context: {
        loaders,
      },
    }
  }

  return graphqlHTTP(opts)
}
