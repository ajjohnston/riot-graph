import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MATCH_ENDPOINT = 'lol/match/v3/matches/'

const getMatchById = id => getRiotQuery(`${MATCH_ENDPOINT}${id}`)

export default new DataLoader(
  ids => Promise.all(ids.map(id => getMatchById(id)))
)
