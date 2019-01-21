import React from 'react'
import Document, { Head, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import GlobalStyle from 'theme/base'
import { AmpScripts, AmpScriptsManager } from 'react-amphtml/setup'

export default class MyDocument extends Document {
  static async getInitialProps({ req, renderPage }) {
    const ampScripts = new AmpScripts()
    const sheet = new ServerStyleSheet()

    try {
      const page = await renderPage((App) => (props) =>
        sheet.collectStyles(
          <AmpScriptsManager ampScripts={ampScripts}>
            <App {...props} />
          </AmpScriptsManager>
        )
      )

      const ampScriptTags = ampScripts.getScriptElements()

      // AMP spec only allows a single style tag.
      // Combine all the style tags from our page into 1 tag
      // Must also be under 40kb
      const css = sheet
        .getStyleElement()
        .reduce(
          (
            css,
            {
              props: { dangerouslySetInnerHTML: { __html = '' } = {} } = {},
            } = {}
          ) => `${css}${__html}`,
          ''
        )

      return {
        ...page,
        url: req.url,
        ampScriptTags,
        css,
      }
    } catch (e) {
      sheet.complete()
      throw e
    }
  }

  render() {
    const { css, url, ampScriptTags } = this.props

    return (
      <html lang="en" amp="">
        <Head>
          <link rel="canonical" href={url} />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
          <noscript>
            <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
          </noscript>
          {ampScriptTags}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
          />
          <GlobalStyle />
          <style amp-custom="" dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
        </body>
      </html>
    )
  }
}
