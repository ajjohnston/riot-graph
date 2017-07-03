// @flow
import limiter from './limiter'
import logger from '../logger'
import config from '../../config.json'

export default function (url: string, key: string = config.API.KEY) {
  const uri = `${config.API.HOST}/${url}`

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
