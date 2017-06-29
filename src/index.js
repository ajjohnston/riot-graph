import express from 'express'
import graphql from './graphql'
import logger from './logger'

const app = express()

app.use('/graphql', graphql())

app.listen(4000, () => {
  logger.info('Listening on port 4000')
})
