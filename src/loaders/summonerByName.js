import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const SUMMONER_ENDPOINT = 'lol/summoner/v3/summoners/by-name/'

const getSummonersByName = name => getRiotQuery(`${SUMMONER_ENDPOINT}${name}`)

export default new DataLoader(
  names => Promise.all(names.map(name => getSummonersByName(name)))
)
