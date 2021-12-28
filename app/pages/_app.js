import React from 'react'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

import client from '../lib/apollo-client';
import { ApolloProvider } from "@apollo/client";

Router.events.on('routeChangeComplete', (url) => {
  gtag.pageview(url);  // Track pageviews on route change
})

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
