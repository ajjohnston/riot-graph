import graphqlHTTP from 'express-graphql'
import riotSchema from './schemas'
import championLoader from './loaders/champion'
import itemLoader from './loaders/item'
import matchLoader from './loaders/match'
import matchListLoader from './loaders/matchList'
import summonerLoader from './loaders/summoner'
import summonerByNameLoader from './loaders/summonerByName'
import summonerSpellLoader from './loaders/summonerSpell'

export const RIOT_TOKEN_HEADER = 'X-Riot-Token'

export default function () {
  const opts = (request) => {
    const apiKey = request.get(RIOT_TOKEN_HEADER)

    return {
      schema: riotSchema,
      graphiql: false,
      context: {
        loaders: {
          champion: championLoader(apiKey),
          item: itemLoader(apiKey),
          match: matchLoader(apiKey),
          matchList: matchListLoader(apiKey),
          summoner: summonerLoader(apiKey),
          summonerByName: summonerByNameLoader(apiKey),
          summonerSpell: summonerSpellLoader(apiKey),
        },
      },
    }
  }

  return graphqlHTTP(opts)
}
