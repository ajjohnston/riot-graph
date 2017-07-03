import express from 'express'
import graphql from './graphql'
import logger from './logger'
import config from '../config.json'

const app = express()

app.use('/graphql', graphql())

app.listen(config.PORT, () => {
  logger.info(`GraphiQL available on http://localhost:${config.PORT}/graphql`)
})
