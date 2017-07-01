import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const MAPS_ENDPOINT = 'lol/static-data/v3/maps'

const getMapById = (id, key) => getRiotQuery(MAPS_ENDPOINT, key)
  .then(({ data }) => data[id])

export default key => new DataLoader(
  ids => Promise.all(ids.map(id => getMapById(id, key)))
)
