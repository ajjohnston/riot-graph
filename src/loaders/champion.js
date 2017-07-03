// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MATCH_ENDPOINT = (id: string) => `lol/static-data/v3/champions/${id}?tags=all`

const getMatchById = (id: string, key: string) => getRiotQuery(MATCH_ENDPOINT(id), key)

export default (key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getMatchById(id, key)))
)
