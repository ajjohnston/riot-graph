// @flow
import DataLoader from 'dataloader'
import queryString from 'querystring'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const MATCHLIST_ENDPOINT = (id: string, start: number, count: number) => {
  const qs = queryString.stringify({
    beginIndex: start,
    endIndex: start + count,
  })

  return `lol/match/v3/matchlists/by-account/${id}?${qs}`
}

const getMatchesById = (region: Region, id: string, key: string, start: number, count: number) =>
  getRiotQuery(region, MATCHLIST_ENDPOINT(id, start, count), key)

export default (region: Region, key: string) =>
  (start: number, count: number) =>
    new DataLoader(
      (ids: Array<string>) => Promise.all(ids.map((id: string) =>
        getMatchesById(region, id, key, start, count))
      )
    )
