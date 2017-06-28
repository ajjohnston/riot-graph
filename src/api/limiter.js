import Limiter from 'limit-request-promise'
import config from '../../config.json'

export default new Limiter(config.API.MAX_CALLS_PER_TIMESPAN, config.API.RATE_TIMESPAN)
