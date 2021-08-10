// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
