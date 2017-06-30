import limiter from './limiter'
import logger from '../logger'
import config from '../../config.json'

export default function (url, key = config.API.KEY) {
  const uri = `${config.API.HOST}/${url}`

  const options = {
    uri,
    headers: {
      'X-Riot-Token': key,
    },
    json: true,
  }

  return limiter.req(options)
    .then((res) => {
      logger.debug({
        uri,
      })

      return res
    }).catch((err) => {
      throw new Error(`url: [${uri}] error: [${err.message}]`)
    })
}
