import Head from 'next/head'
import Topbar from '../components/topbar.js'
import Body from '../components/body.js'
import styles from '../styles/Home.module.css'

import params from '../config/params.json'

export default function Home({params}) {
  return (
    <div class="">
      <Head>
        <title>{params.title}</title>
        <link rel="icon" href={params.icon} />
      </Head>
      <Topbar icon={params.icon} title={params.title} links={params.links}/>
      <Body/>
      <div className={styles.footer}>
        <a></a>
      </div>
   </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      params,
    },
  }
}
