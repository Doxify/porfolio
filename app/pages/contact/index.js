import Layout from '../../components/layout'
import Head from "next/head";
import ContactCard from "../../components/contactCard";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Andrei Georgescu - Contact</title>
      </Head>
      <ContactCard />
    </Layout>    
  )
}