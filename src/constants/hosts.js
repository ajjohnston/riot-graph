// @flow
import { type Region } from './regions'
import config from '../../config.json'

export const API_HOST = (region: Region) => `https://${region.toLowerCase()}.api.riotgames.com`
export const IMAGE_HOST = `http://ddragon.leagueoflegends.com/cdn/${config.API.PATCH}/img`
