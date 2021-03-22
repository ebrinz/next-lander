import '../styles/globals.css'
import '../styles/tailwind.css'
import App from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getStaticProps = async (appContext) => {
  const appProps = await App.getStaticProps(appContext);
  return { ...appProps }
}

export default MyApp
