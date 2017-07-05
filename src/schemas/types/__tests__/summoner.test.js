import { graphql } from 'graphql'
import RiotSchema from '../../'

test('Gets an error when summoner name argument is omitted', () => {
  const query = '{ summoner { name } }'

  return graphql(RiotSchema, query).then(({ errors }) => {
    expect(errors.length).toBe(1)
    expect(errors[0].message).toBe('Field "summoner" argument "name" of type "String!" is required but not provided.')
  })
})

test('Should be valid when name is provided', () => {
  const query = '{ summoner(name: "test") { name } }'

  const summonerMock = jest.fn()
  const summonerByName = { load: summonerMock }

  return graphql(RiotSchema, query, null, { loaders: { summonerByName } })
    .then(({ errors }) => {
      expect(errors).toBeUndefined()
      expect(summonerMock).toBeCalledWith('test')
    })
})

test('Should resolve summoner match list from the loader', () => {
  const query = '{ summoner(name: "test") { matchList { totalGames } } }'

  const summonerMock = jest.fn().mockReturnValue({
    name: 'test',
    accountId: 123,
  })

  const matchListMock = jest.fn().mockReturnValue({
    totalGames: 123,
  })

  const summonerByName = { load: summonerMock }
  const matchList = () => ({ load: matchListMock })

  return graphql(RiotSchema, query, null, { loaders: { matchList, summonerByName } })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(matchListMock).toBeCalledWith(123)
      expect(data.summoner).toHaveProperty('matchList')
      expect(data.summoner.matchList).toEqual({ totalGames: 123 })
    })
})

test('Should resolve summoner league positions from the loader', () => {
  const query = '{ summoner(name: "test") { leaguePositions { rank } } }'

  const summonerMock = jest.fn().mockReturnValue({
    name: 'test',
    id: 123,
  })

  const leaguePositionsMock = jest.fn().mockReturnValue([{
    rank: 'WOOD',
  }])

  const summonerByName = { load: summonerMock }
  const leaguePositions = { load: leaguePositionsMock }

  return graphql(RiotSchema, query, null, { loaders: { leaguePositions, summonerByName } })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(leaguePositionsMock).toBeCalledWith(123)
      expect(data.summoner).toHaveProperty('leaguePositions')
      expect(data.summoner.leaguePositions).toEqual([{
        rank: 'WOOD',
      }])
    })
})

test('Should resolve summoner champion masteries from the loader', () => {
  const query = '{ summoner(name: "test") { championMastery { playerId } } }'

  const summonerMock = jest.fn().mockReturnValue({
    name: 'test',
    id: 123,
  })

  const championMasteryMock = jest.fn().mockReturnValue([{
    playerId: 123,
  }])

  const summonerByName = { load: summonerMock }
  const championMastery = { load: championMasteryMock }

  return graphql(RiotSchema, query, null, { loaders: { championMastery, summonerByName } })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(championMasteryMock).toBeCalledWith(123)
      expect(data.summoner).toHaveProperty('championMastery')
      expect(data.summoner.championMastery).toEqual([{
        playerId: 123,
      }])
    })
})
