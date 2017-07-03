// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'
import { type Region } from '../constants/regions'

const SUMMONER_SPELL_ENDPOINT = (id: string) => `lol/static-data/v3/summoner-spells/${id}?tags=all`

const getSummonerSpellById = (region: Region, id: string, key: string) =>
  getRiotQuery(region, SUMMONER_SPELL_ENDPOINT(id), key, false)

export default (region: Region, key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) =>
    getSummonerSpellById(region, id, key))
  )
)
