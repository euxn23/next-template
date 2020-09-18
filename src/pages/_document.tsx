import React from 'react'
import {
  default as NextDocument,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title></title>
          <meta name="viewport" content="initial-scale=1" />
          <meta name="description" content="" />

          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
