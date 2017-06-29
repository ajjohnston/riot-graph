import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const SUMMONER_ENDPOINT = id => `lol/summoner/v3/summoners/by-account/${id}`

const getSummonersByAccountId = (id, key) => getRiotQuery(SUMMONER_ENDPOINT(id), key)

export default key => new DataLoader(
  ids => Promise.all(ids.map(id => getSummonersByAccountId(id, key)))
)
