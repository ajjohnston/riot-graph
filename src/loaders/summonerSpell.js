// @flow
import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const SUMMONER_SPELL_ENDPOINT = (id: string) => `lol/static-data/v3/summoner-spells/${id}?tags=all`

const getSummonerSpellById = (id: string, key: string) =>
  getRiotQuery(SUMMONER_SPELL_ENDPOINT(id), key)

export default (key: string) => new DataLoader(
  (ids: Array<string>) => Promise.all(ids.map((id: string) => getSummonerSpellById(id, key)))
)
