import { graphql } from 'graphql'
import RiotSchema from '../../'

test('Should resolve a summoners champion masteries', () => {
  const query = '{ summoner(name: "test") { championMastery { champion { name } } } }'

  const summonerMock = jest.fn().mockReturnValue({
    name: 'test',
    id: 123,
  })

  const championMasteryMock = jest.fn().mockReturnValue([{
    playerId: 123,
    championId: 1,
  }])

  const championMock = jest.fn().mockReturnValue({
    name: 'Kennen',
  })

  const loaders = {
    champion: { load: championMock },
    championMastery: { load: championMasteryMock },
    summonerByName: { load: summonerMock },
  }

  return graphql(RiotSchema, query, null, { loaders })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(championMasteryMock).toBeCalledWith(123)
      expect(championMock).toBeCalledWith(1)
      expect(data.summoner).toHaveProperty('championMastery')
      expect(data.summoner.championMastery.length).toBe(1)
      expect(data.summoner.championMastery[0].champion.name).toBe('Kennen')
    })
})
