import express from 'express'
import path from 'path'
import graphql from './graphql'
import logger from './logger'

const app = express()

app.use(express.static(path.join(__dirname, './client/dist')))

app.use('/graphql', graphql())
app.use('/ui', (req, res) => {
  const indexPath = path.join(__dirname, './client/dist', 'index.html')
  res.sendFile(indexPath)
})

app.listen(4000, () => {
  logger.info('Listening on port 4000')
})
