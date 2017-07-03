// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const SUMMONER_ENDPOINT = (name: string) => `lol/summoner/v3/summoners/by-name/${name}`

const getSummonersByName = (name: string, key: string) => getRiotQuery(SUMMONER_ENDPOINT(name), key)

export default (key: string) => new DataLoader(
  (names: Array<string>) => Promise.all(names.map((name: string) => getSummonersByName(name, key)))
)
