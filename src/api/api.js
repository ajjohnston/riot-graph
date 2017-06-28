import limiter from './limiter'
import logger from '../logger'
import config from '../../config.json'

export default function (url, key = config.API.KEY) {
  const options = {
    uri: `${config.API.HOST}/${url}`,
    headers: {
      'X-Riot-Token': key,
    },
    json: true,
  }

  return limiter.req(options).then((res) => {
    logger.debug({
      uri: options.uri,
    })

    return res
  })
}
