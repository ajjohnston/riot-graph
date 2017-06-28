import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MATCH_ENDPOINT = id => `lol/static-data/v3/champions/${id}?tags=all`

const getMatchById = id => getRiotQuery(`${MATCH_ENDPOINT(id)}`)

export default new DataLoader(
  ids => Promise.all(ids.map(id => getMatchById(id)))
)
