// @flow
import graphqlHTTP from 'express-graphql'
import riotSchema from './schemas'

import { type Loaders } from './loaders/loaders'
import championLoader from './loaders/champion'
import itemLoader from './loaders/item'
import mapLoader from './loaders/map'
import matchLoader from './loaders/match'
import matchListLoader from './loaders/matchList'
import summonerLoader from './loaders/summoner'
import summonerByNameLoader from './loaders/summonerByName'
import summonerSpellLoader from './loaders/summonerSpell'

const RIOT_TOKEN_HEADER = 'X-Riot-Token'

export default function () {
  const opts = (request: Object) => {
    const apiKey = request.get(RIOT_TOKEN_HEADER)

    const loaders: Loaders = {
      champion: championLoader(apiKey),
      item: itemLoader(apiKey),
      map: mapLoader(apiKey),
      match: matchLoader(apiKey),
      matchList: matchListLoader(apiKey),
      summoner: summonerLoader(apiKey),
      summonerByName: summonerByNameLoader(apiKey),
      summonerSpell: summonerSpellLoader(apiKey),
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
