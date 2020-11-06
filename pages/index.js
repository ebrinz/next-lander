import Head from 'next/head'
import Topbar from '../components/topbar.js'
import Body from '../components/body.js'
import { getPosts } from '../lib/handlers.js'
import styles from '../styles/Home.module.css'

import params from '../config/params.json'

export default function Home({params, posts}) {
  return (
    <div class="">
      <Head>
        <title>{params.title}</title>
        <link rel="icon" href={params.icon} />
      </Head>
      <Topbar icon={params.icon} title={params.title} links={params.links}/>
      <Body posts={posts}/>
      <div class="flex py-10 justify-center items-center w-full bg-gray-100 bsolute">
        <a></a>
      </div>
   </div>
  )
}

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      params,
      posts
    },
  }
}
