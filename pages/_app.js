import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo'
import withApolloClient from 'lib/with-apollo-client'
import theme from 'theme'

export class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, query: router.query }
  }

  render() {
    const { Component, pageProps, query, apolloClient } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} {...query} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
