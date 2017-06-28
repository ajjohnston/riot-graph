import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MATCHLIST_ENDPOINT = id => `lol/match/v3/matchlists/by-account/${id}/recent`

const getMatchesById = id => getRiotQuery(`${MATCHLIST_ENDPOINT(id)}`)

export default new DataLoader(
  ids => Promise.all(ids.map(getMatchesById))
)
