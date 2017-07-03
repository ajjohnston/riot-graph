// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const MAPS_ENDPOINT = 'lol/static-data/v3/maps'

const getMapById = (region: Region, id: string, key: string) =>
  getRiotQuery(region, MAPS_ENDPOINT, key).then(({ data }: { data: Object}) => data[id])

export default (region: Region, key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getMapById(region, id, key)))
)
