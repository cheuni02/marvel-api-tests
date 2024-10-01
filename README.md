# Marvel-API: Demo of API testing with Mocha, Axios and Chai

Testing the endpoints listed on this page: https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0:

- /v1/public/characters
- /v1/public/comics
- /v1/public/creators
- /v1/public/events
- /v1/public/series
- /v1/public/stories

## Pre-requisites

1) Register an account with the developer portal of Marvel: https://developer.marvel.com/
2) Obtain a public and private api keys from https://developer.marvel.com/account
3) create an .env file at the root, copy and paste what's on `.env.sample` and fill in the values for 

```
PUB_API_KEY=
PRIV_API_KEY=
```

## Build

```
yarn install
```

## Running tests

```
yarn test
```