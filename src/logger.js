// @flow
import winston from 'winston'

export default new winston.Logger({
  level: 'debug',
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
    }),
  ],
})
