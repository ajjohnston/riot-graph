// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const ITEM_ENDPOINT = (id: string) => `lol/static-data/v3/items/${id}?tags=all`

const getItemById = (region: Region, id: string, key: string) => {
  if (id === 0) return null
  return getRiotQuery(region, ITEM_ENDPOINT(id), key)
}

export default (region: Region, key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getItemById(region, id, key)))
)
