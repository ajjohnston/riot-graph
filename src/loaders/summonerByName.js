// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const SUMMONER_ENDPOINT = (name: string) => `lol/summoner/v3/summoners/by-name/${name}`

const getSummonersByName = (region: Region, name: string, key: string) =>
  getRiotQuery(region, SUMMONER_ENDPOINT(name), key)

export default (region: Region, key: string) => new DataLoader(
  (names: Array<string>) => Promise.all(names.map((name: string) =>
    getSummonersByName(region, name, key))
  )
)
