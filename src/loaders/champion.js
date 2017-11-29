// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const CHAMPION_ENDPOINT = (id: string) => `lol/static-data/v3/champions/${id}?tags=all`

const getChampionById = (region: Region, id: string, key: string) =>
  getRiotQuery(region, CHAMPION_ENDPOINT(id), key, false)

export default (region: Region, key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getChampionById(region, id, key)))
)
