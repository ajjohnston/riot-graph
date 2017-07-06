# riot-graph
A GraphQL Wrapper for the Riot API.

### Dependencies
- [Node.js v8.1.2](https://nodejs.org/en/)
- [Yarn 0.24.6](https://yarnpkg.com/en/)

## Getting Started
```
yarn
cp config.json.template config.json
yarn dev
```

## Usage
riot-graph exposes an endpoint for GraphQL queries at `localhost:4000/graphql`. Hitting this endpoint in your browser will return a GraphiQL IDE instance.

### Example Query
The following query will return the last 5 matches for `riot heartwumbo`, and the name and image for the champion that they played.
```graphql
{
  summoner(name: "riot heartwumbo") {
    id
    accountId
    name
    profileIcon
    matchList(start: 0, count: 5) {
      totalGames
      matches {
        lane
        gameId
        champion {
          id
          name
          image {
            full
            group
            sprite
            h
            w
            x
            y
          }
        }
      }
    }
  }
}

```

### Testing
```
yarn test
```

### Production
```
yarn build
yarn start
```

## Disclaimer
riot-graph isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
