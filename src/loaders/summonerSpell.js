import DataLoader from 'dataloader'
import getRiotQuery from '../api/api'

const SUMMONER_SPELL_ENDPOINT = id => `lol/static-data/v3/summoner-spells/${id}?tags=all`

const getSummonerSpellById = (id, key) => getRiotQuery(SUMMONER_SPELL_ENDPOINT(id), key)

export default key => new DataLoader(
  ids => Promise.all(ids.map(id => getSummonerSpellById(id, key)))
)
