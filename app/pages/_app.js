import React from 'react'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

// Track pageviews on route change
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
