import Head from 'next/head'
import Layout from '../../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Andrei Georgescu - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Welcome to the blog!</h1>

    </Layout>
  )
}