import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const ITEM_ENDPOINT = id => `lol/static-data/v3/items/${id}?tags=all`

const getItemById = (id, key) => {
  if (id === 0) return null
  return getRiotQuery(ITEM_ENDPOINT(id), key)
}

export default key => new DataLoader(
  ids => Promise.all(ids.map(id => getItemById(id, key)))
)
