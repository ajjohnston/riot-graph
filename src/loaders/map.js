// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MAPS_ENDPOINT = 'lol/static-data/v3/maps'

const getMapById = (id: string, key: string) => getRiotQuery(MAPS_ENDPOINT, key)
  .then(({ data }: { data: Object}) => data[id])

export default (key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getMapById(id, key)))
)
