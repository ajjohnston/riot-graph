import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MATCH_ENDPOINT = id => `lol/match/v3/matches/${id}`

const getMatchById = (id, key) => getRiotQuery(MATCH_ENDPOINT(id, key))

export default key => new DataLoader(
  ids => Promise.all(ids.map(id => getMatchById(id, key)))
)
