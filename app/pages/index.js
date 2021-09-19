import Head from 'next/head'

import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

import Layout from '../components/partials/Layout'
import Hero from '../components/Hero'
import AboutCard from '../components/aboutCard'
import Loading from '../components/loading'

export default function Home() {
  const { data, loading, error } = useQuery(gql`
    query {
      socials {
        active
        name
        icon
        link
      }
      about(query: { name: "Andrei Georgescu" }) {
        name
        bio_intro
        bio_general
      }
    }
  `);

  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <Loading /> // TODO: Handle this
    )
  }

  return (
      <Layout>
        <Head>
          <title>Andrei Georgescu - Software Engineer</title>
        </Head>
        <Hero socials={data.socials} />
        <AboutCard about={data.about} />
      </Layout>
  )
}
