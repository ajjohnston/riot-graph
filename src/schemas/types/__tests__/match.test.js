import { graphql } from 'graphql'
import RiotSchema from '../../'

test('Should error when a non-integer id is given', () => {
  const query = '{ match(id: "123") { queue } }'

  const matchMock = jest.fn().mockReturnValue({
    gameId: 2,
    queueId: 2,
  })

  const loaders = {
    match: { load: matchMock },
  }

  return graphql(RiotSchema, query, null, { loaders })
    .then(({ errors }) => {
      expect(errors.length).toBe(1)
      expect(errors[0].message).toContain('Argument "id" has invalid value')
    })
})

test('Should resolve the participant champions for the match', () => {
  const query = '{ match(id: 123) { participants { champion { name } } } }'

  const matchMock = jest.fn().mockReturnValue({
    gameId: 2,
    participants: [{
      championId: 1,
    }, {
      championId: 2,
    }],
  })

  const championMock = jest.fn()
    .mockReturnValueOnce({
      name: 'Teemo',
    })
    .mockReturnValueOnce({
      name: 'Kennen',
    })

  const loaders = {
    champion: { load: championMock },
    match: { load: matchMock },
  }

  return graphql(RiotSchema, query, null, { loaders })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(championMock).toBeCalledWith(1)
      expect(championMock).toBeCalledWith(2)
      expect(data.match.participants.length).toBe(2)
      expect(data.match.participants[0].champion.name).toBe('Teemo')
      expect(data.match.participants[1].champion.name).toBe('Kennen')
    })
})

test('Should resolve the participant summoner spells for the match', () => {
  const query = '{ match(id: 123) { participants { summonerSpell1 { name } summonerSpell2 { name } } } }'

  const matchMock = jest.fn().mockReturnValue({
    gameId: 2,
    participants: [{
      spell1Id: 1,
      spell2Id: 2,
    }],
  })

  const summonerSpellMock = jest.fn()
    .mockReturnValueOnce({
      name: 'Flash',
    })
    .mockReturnValueOnce({
      name: 'Ignite',
    })

  const loaders = {
    summonerSpell: { load: summonerSpellMock },
    match: { load: matchMock },
  }

  return graphql(RiotSchema, query, null, { loaders })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(summonerSpellMock).toBeCalledWith(1)
      expect(summonerSpellMock).toBeCalledWith(2)
      expect(data.match.participants.length).toBe(1)
      expect(data.match.participants[0].summonerSpell1.name).toBe('Flash')
      expect(data.match.participants[0].summonerSpell2.name).toBe('Ignite')
    })
})

test('Should resolve the queue name', () => {
  const query = '{ match(id: 123) { queue } }'

  const matchMock = jest.fn().mockReturnValue({
    gameId: 2,
    queueId: 2,
  })

  const loaders = {
    match: { load: matchMock },
  }

  return graphql(RiotSchema, query, null, { loaders })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(data.match.queue).toBe('Normal 5v5 Blind Pick')
    })
})

test('Should resolve the map for the match', () => {
  const query = '{ match(id: 123) { map { name } } }'

  const matchMock = jest.fn().mockReturnValue({
    gameId: 2,
    mapId: 2,
  })

  const mapMock = jest.fn().mockReturnValue({
    mapName: 'Summoners Rift',
  })

  const loaders = {
    map: { load: mapMock },
    match: { load: matchMock },
  }

  return graphql(RiotSchema, query, null, { loaders })
    .then(({ data, errors }) => {
      expect(errors).toBeUndefined()
      expect(mapMock).toBeCalledWith(2)
      expect(data.match.map.name).toBe('Summoners Rift')
    })
})
