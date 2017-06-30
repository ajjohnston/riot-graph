import express from 'express'
import path from 'path'
import graphql from './graphql'
import logger from './logger'
import config from '../config.json'

const app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.use('/graphql', graphql())
app.use('/ui', (req, res) => {
  const indexPath = path.join(__dirname, '../dist', 'index.html')
  res.sendFile(indexPath)
})

app.listen(config.PORT, () => {
  logger.info(`Listening on port ${config.PORT}`)
  logger.info(`Send GraphQL queries localhost:${config.PORT}/graphql`)
  logger.info(`GraphiQL available at localhost:${config.PORT}/ui`)
})
