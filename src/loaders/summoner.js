// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const SUMMONER_ENDPOINT = (id: string) => `lol/summoner/v3/summoners/by-account/${id}`

const getSummonersByAccountId = (region: Region, id: string, key: string) =>
  getRiotQuery(region, SUMMONER_ENDPOINT(id), key)

export default (region: Region, key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) =>
    getSummonersByAccountId(region, id, key))
  )
)
