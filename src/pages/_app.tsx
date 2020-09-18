import React from 'react'
import { default as NextApp } from 'next/app'
import './style.scss'
import Head from 'next/head'

type Props = {
  title?: string
}

export default class App extends NextApp<Props> {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>{this.props.title && <title>{this.props.title}</title>}</Head>
        <Component {...pageProps} />
      </>
    )
  }
}
