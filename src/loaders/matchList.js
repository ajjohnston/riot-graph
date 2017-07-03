// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MATCHLIST_ENDPOINT = (id: string) => `lol/match/v3/matchlists/by-account/${id}/recent`

const getMatchesById = (id: string, key: string) => getRiotQuery(MATCHLIST_ENDPOINT(id), key)

export default (key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getMatchesById(id, key)))
)
