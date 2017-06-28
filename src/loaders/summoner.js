import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const SUMMONER_ENDPOINT = 'lol/summoner/v3/summoners/by-account/'

const getSummonersByAccountId = accountId => getRiotQuery(`${SUMMONER_ENDPOINT}${accountId}`)

export default new DataLoader(
  ids => Promise.all(ids.map(id => getSummonersByAccountId(id)))
)
