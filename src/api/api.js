import request from 'request-promise'
import config from '../../config.json'
import logger from '../logger'

export default function (url, key = config.API.KEY) {
  const options = {
    uri: `${config.API.HOST}/${url}`,
    headers: {
      'X-Riot-Token': key,
    },
    json: true,
  }

  logger.debug({
    uri: options.uri,
  })

  return request(options)
}
