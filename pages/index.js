import Head from 'next/head'
import Topbar from '../components/topbar.js'
import Body from '../components/body.js'
import { getTaggedPosts, getUniqueTags } from '../lib/handlers.js'

// import styles from '../styles/Home.module.css'

import siteParams from '../config/params.json'
import postIndex from '../data/index.json'

export default function Home({siteParams, tags, posts}) {

  // const handleMenuClick = (e) => {
  //   tagFilter = e.target.textContent;
  //   console.log(tagFilter)
  // }

  return (
    <div class="">
      <Head>
        <title>{siteParams.title}</title>
        <link rel="icon" href={siteParams.icon} />
      </Head>
      <Topbar icon={siteParams.icon} title={siteParams.title} links={siteParams.links}/>
      <Body tags={tags} posts={posts}/>
      <div class="flex py-10 justify-center items-center w-full bg-gray-100 absolute">
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const tags = getUniqueTags(postIndex);
  const posts = getTaggedPosts(postIndex, tags[0]);

  return {
    props: {
      postIndex,
      siteParams,
      tags,
      posts
    },
  }

}
