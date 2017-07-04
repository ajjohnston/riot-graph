// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const LEAGUE_POSITION_ENDPOINT = (id: string) => `lol/league/v3/positions/by-summoner/${id}`

const getLeaguePositionsBySummonerId = (region: Region, id: string, key: string) =>
  getRiotQuery(region, LEAGUE_POSITION_ENDPOINT(id), key)

export default (region: Region, key: string) =>
  new DataLoader(
    (ids: Array<string>) => Promise.all(ids.map((id: string) =>
      getLeaguePositionsBySummonerId(region, id, key))
    )
  )
