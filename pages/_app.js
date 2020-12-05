import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  // componentDidMount() {
  //   window.addEventListener(scroll, event => {
  //       console.log('p', window.scrollY)
  //   })
  // }
  return <Component {...pageProps} />
}


export default MyApp
