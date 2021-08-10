import styles from './layout.module.css'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Andrei Georgescu - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </Head>
      <Navigation />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}
