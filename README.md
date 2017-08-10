## Installation

```
npm install
```

## Running

Start a local server:

```
npm start
```

## Relay settings

You can set the connection params in `/js/app.js`
```
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:7474/graphql/', {
    headers: {
      Authorization: 'Basic bmVvNGo6YnVyZWsxMjMasdasd=',
    },
  })
);
```

## Sample graphql call
```
 fragment on House {
            name
            words
            founder {
              name
            }
            seats {
              name
            }
            region {
              name
            }
            follows {
              name
            }
            followers(first:10) {
              name
              seats { name }
            }
      }
```
with param
```
new AppHomeRoute({name:'House Stark of Winterfell'})
```
