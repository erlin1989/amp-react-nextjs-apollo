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
MIT License

Copyright (c) [2019] [Joshua Huang]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.