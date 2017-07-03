// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const SUMMONER_ENDPOINT = (id: string) => `lol/summoner/v3/summoners/by-account/${id}`

const getSummonersByAccountId = (id: string, key: string) =>
  getRiotQuery(SUMMONER_ENDPOINT(id), key)

export default (key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getSummonersByAccountId(id, key)))
)
