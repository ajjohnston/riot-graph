import express from 'express'
import graphqlHTTP from 'express-graphql'
import logger from './logger'
import riotSchema from './schemas'

import championLoader from './loaders/champion'
import itemLoader from './loaders/item'
import matchLoader from './loaders/match'
import matchListLoader from './loaders/matchList'
import summonerLoader from './loaders/summoner'
import summonerByNameLoader from './loaders/summonerByName'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: riotSchema,
  graphiql: true,
  context: {
    loaders: {
      champion: championLoader,
      item: itemLoader,
      match: matchLoader,
      matchList: matchListLoader,
      summoner: summonerLoader,
      summonerByName: summonerByNameLoader,
    },
  },
}))

app.listen(4000, () => {
  logger.info('Listening on port 4000')
})
