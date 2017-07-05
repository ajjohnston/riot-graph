import { graphql } from 'graphql'
import RiotSchema from '../../'

test('Should resolve a match in a match list from the loader', () => {
  const query = '{ summoner(name: "test") { matchList { matches { match { gameId } } } } }'

  const summonerMock = jest.fn().mockReturnValue({
    name: 'test',
    accountId: 123,
  })

  const matchListMock = jest.fn().mockReturnValue({
    matches: [{
      gameId: 2,
    }],
  })

  const matchMock = jest.fn().mockReturnValue({
    gameId: 2,
  })

  const loaders = {
    match: { load: matchMock },
    matchList: () => ({ load: matchListMock }),
    summonerByName: { load: summonerMock },
  }

  return graphql(RiotSchema, query, null, { loaders })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(matchListMock).toBeCalledWith(123)
      expect(matchMock).toBeCalledWith(2)
      expect(data.summoner).toHaveProperty('matchList')
      expect(data.summoner.matchList.matches.length).toBe(1)
      expect(data.summoner.matchList.matches[0].match.gameId).toBe(2)
    })
})

test('Should resolve a champion in a match list from the loader', () => {
  const query = '{ summoner(name: "test") { matchList { matches { champion { name } } } } }'

  const summonerMock = jest.fn().mockReturnValue({
    name: 'test',
    accountId: 123,
  })

  const matchListMock = jest.fn().mockReturnValue({
    matches: [{
      gameId: 2,
      champion: 5,
    }],
  })

  const championMock = jest.fn().mockReturnValue({
    id: 5,
    name: 'Kennen',
  })

  const loaders = {
    champion: { load: championMock },
    matchList: () => ({ load: matchListMock }),
    summonerByName: { load: summonerMock },
  }

  return graphql(RiotSchema, query, null, { loaders })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(matchListMock).toBeCalledWith(123)
      expect(championMock).toBeCalledWith(5)
      expect(data.summoner).toHaveProperty('matchList')
      expect(data.summoner.matchList.matches.length).toBe(1)
      expect(data.summoner.matchList.matches[0].champion.name).toBe('Kennen')
    })
})
