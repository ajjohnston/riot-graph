import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MATCHLIST_ENDPOINT = id => `lol/match/v3/matchlists/by-account/${id}/recent`

const getMatchesById = (id, key) => getRiotQuery(MATCHLIST_ENDPOINT(id), key)

export default key => new DataLoader(
  ids => Promise.all(ids.map(id => getMatchesById(id, key)))
)
