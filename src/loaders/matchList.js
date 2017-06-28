import DataLoader from 'dataloader'
import qs from 'querystring'
import getRiotQuery from '../api/api'

const MATCHLIST_ENDPOINT = id => `/lol/match/v3/matchlists/by-account/${id}/recent`

const getMatchesById = (id, champion) => {
  const query = qs.stringify({
    champion,
  })

  return getRiotQuery(`${MATCHLIST_ENDPOINT(id)}?${query}`)
}

export default champions => new DataLoader(
  ids => Promise.all(ids.map(id => getMatchesById(id, champions)))
)
