// @flow
import limiter from './limiter'
import logger from '../logger'
import { API_HOST } from '../constants/hosts'
import { type Region } from '../constants/regions'
import config from '../../config.json'

export default function (region: Region, url: string, key: string = config.API.KEY) {
  const uri = `${API_HOST(region)}/${url}`

  const options = {
    uri,
    headers: {
      'X-Riot-Token': key,
    },
    json: true,
  }

  return limiter.req(options)
    .then((res: any) => {
      logger.debug({
        uri,
      })

      return res
    }).catch((err: Error) => {
      throw new Error(`url: [${uri}] error: [${err.message}]`)
    })
}
