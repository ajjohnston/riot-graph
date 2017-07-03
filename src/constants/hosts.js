// @flow
import { type Region } from './regions'

export const API_HOST = (region: Region) => `https://${region.toLowerCase()}.api.riotgames.com`
export const IMAGE_HOST = 'http://ddragon.leagueoflegends.com/cdn/7.13.1/img'
