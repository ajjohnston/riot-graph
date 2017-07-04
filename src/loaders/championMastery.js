// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const CHAMPION_MASTERY_ENDPOINT = (id: string) => `lol/champion-mastery/v3/champion-masteries/by-summoner/${id}`

const getChampionMasteryForSummoner = (region: Region, id: string, key: string) =>
  getRiotQuery(region, CHAMPION_MASTERY_ENDPOINT(id), key, false)

export default (region: Region, key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) =>
    getChampionMasteryForSummoner(region, id, key))
  )
)
