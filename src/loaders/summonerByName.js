import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const SUMMONER_ENDPOINT = name => `lol/summoner/v3/summoners/by-name/${name}`

const getSummonersByName = (name, key) => getRiotQuery(SUMMONER_ENDPOINT(name), key)

export default key => new DataLoader(
  names => Promise.all(names.map(name => getSummonersByName(name, key)))
)
