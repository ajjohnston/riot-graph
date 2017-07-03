// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const ITEM_ENDPOINT = (id: string) => `lol/static-data/v3/items/${id}?tags=all`

const getItemById = (id: string, key: string) => {
  if (id === 0) return null
  return getRiotQuery(ITEM_ENDPOINT(id), key)
}

export default (key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getItemById(id, key)))
)
