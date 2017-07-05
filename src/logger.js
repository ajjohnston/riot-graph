// @flow
import winston from 'winston'
import config from '../config.json'

export default new winston.Logger({
  level: config.LOG_LEVEL || 'info',
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
    }),
  ],
})
