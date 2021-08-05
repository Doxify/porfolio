import Head from 'next/head'
import Link from 'next/link';
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Andrei Georgescu - Software Engineer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="title">
          {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
        </h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Blog</h3>
                <h6 className="card-subtitle">Find in-depth information about Next.js features and API.</h6>
              </div>
              <div>
                <Link href="/blog">
                  <a className="stretched-link"></a>
                </Link>
              </div> 
            </div>
          </div>
        </div>
    </Layout>
  )
}
