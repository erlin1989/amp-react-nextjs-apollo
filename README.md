# AMP

## Task description
Create [Google AMP](https://ampproject.org) pages for our mobile venue pages such as https://www.bookwell.com.au/venue/elwood-thai-massage/elwood/3184

We'll probably end up hosting the AMP pages on a separate sub-domain like amp.bookwell.com.au, the route can be something like /v/{venue.slug} e.g. amp.bookwell.com.au/v/elwood-thai-massage.

## About
The core technologies used are [React](https://github.com/facebook/react), [Next.js](https://github.com/zeit/next.js/), [Apollo client](https://github.com/apollographql/apollo-client), [Styled components](https://github.com/styled-components/styled-components), [AMP HTML](https://github.com/dfrankland/react-amphtml/)

Next.js was used for SSR in order to compile our react app into AMP compliant documents.

Styled-components was chosen as the main styling library since it allows us to have scoped styled for our components as well as providing SSR support that allows us to pull all style tags into 1 tag in the Head (as per the AMP spec)

React-amphtml was used to generate amphtml components more easily

Apollo-client used for querying the graphql API

Eslint/prettier used for formatting/linting

Jest/enzyme used for unit tests

Component structure follows [Atomic design](http://atomicdesign.bradfrost.com/table-of-contents/)

## Usage
### Installation
```
yarn install
```

### Development
```
yarn run dev
```

### Production
First of all, we need to build our Next.js app for production. It will produce an optimized set of code for production.

```
yarn run build
```

Then you need to start your Next.js app on a port. That will do server side rendering and serve pages (built with the above command).

```
yarn run start
```

## Testing
```
yarn run test
```

## Deployment
```
N/A
```

## License
[MIT](https://github.com/kfrx/amp-react-nextjs-apollo/blob/master/LICENSE)