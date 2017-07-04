// @flow
import request from 'request-promise'
import limiter from './limiter'
import logger from '../logger'
import { API_HOST } from '../constants/hosts'
import { type Region } from '../constants/regions'
import config from '../../config.json'

const X_RIOT_TOKEN_HEADER = 'X-Riot-Token'

const loggedRequest = (opts: Object) => {
  logger.debug({
    uri: opts.uri,
  })

  return request(opts)
}

const limitedRequest = limiter(
  (opts: Object) => loggedRequest(opts),
  config.API.MAX_CALLS_PER_TIMESPAN,
  config.API.TIMESPAN_IN_SECONDS
)

export default function (region: Region, url: string, key: string = config.API.KEY,
  rateLimited: boolean = true) {
  const uri = `${API_HOST(region)}/${url}`

  const options = {
    uri,
    headers: {
      [X_RIOT_TOKEN_HEADER]: key,
    },
    json: true,
  }

  if (!rateLimited) {
    return loggedRequest(options)
  }

  return limitedRequest(options)
    .catch((err: Error) => {
      throw new Error(`url: [${uri}] error: [${err.message}]`)
    })
}
