import styles from './layout.module.css'
import Navigation from '../components/navigation'

export default function Layout({ children }) {
  return (
    <div>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"></link>
      <Navigation />
      <div className={styles.container}>{children}</div>
    </div>
  )
}
