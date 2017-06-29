import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MATCH_ENDPOINT = id => `lol/static-data/v3/champions/${id}?tags=all`

const getMatchById = (id, key) => getRiotQuery(MATCH_ENDPOINT(id), key)

export default key => new DataLoader(
  ids => Promise.all(ids.map(id => getMatchById(id, key)))
)
