// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const MATCHLIST_ENDPOINT = (id: string) => `lol/match/v3/matchlists/by-account/${id}/recent`

const getMatchesById = (region: Region, id: string, key: string) =>
  getRiotQuery(region, MATCHLIST_ENDPOINT(id), key)

export default (region: Region, key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getMatchesById(region, id, key)))
)
