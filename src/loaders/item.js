import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const ITEM_ENDPOINT = id => `lol/static-data/v3/items/${id}?tags=all`

const getItemById = id => getRiotQuery(ITEM_ENDPOINT(id))

export default new DataLoader(
  ids => Promise.all(ids.map(id => getItemById(id)))
)
