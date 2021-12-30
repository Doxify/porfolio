import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

import client from '../lib/apollo-client';
import { ApolloProvider } from "@apollo/client";
import LoadingBar from 'react-top-loading-bar'

Router.events.on('routeChangeComplete', (url) => {
  gtag.pageview(url);  // Track pageviews on route change
})

export default function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(100);

  return (
    <ApolloProvider client={client}>
      <LoadingBar 
        progress={progress}
        height={3}
        color='#0b5ed7'
        waitingTime={700}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
