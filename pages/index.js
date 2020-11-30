import Head from 'next/head'
import Topbar from '../components/topbar.js'
import Body from '../components/body.js'
import { getPosts } from '../lib/handlers.js'

// import styles from '../styles/Home.module.css'

import params from '../config/params.json'
import postIndex from '../data/index.json'

export default function Home({params, tags, tagFilter, posts}) {

  const handleMenuClick = (e) => {
    tagFilter = e.target.textContent;
    console.log(tagFilter)
  }

  return (
    <div class="">
      <Head>
        <title>{params.title}</title>
        <link rel="icon" href={params.icon} />
      </Head>
      <Topbar icon={params.icon} title={params.title} links={params.links}/>
      <Body tags={tags} posts={posts} tagFilter={tagFilter} menuClick={handleMenuClick}/>
      <div class="flex py-10 justify-center items-center w-full bg-gray-100 absolute">
      </div>
   </div>
  )
}

export async function getStaticProps() {

  const posts = getPosts(postIndex);
  const tags = [];

  for (var i=0; i < postIndex.length; i++) {
      if (!tags.includes(postIndex[i].tag)) {
          tags.push(postIndex[i].tag)
      }
  };

  const tagFilter = tags[0];

  return {
    props: {
      postIndex,
      params,
      tags,
      tagFilter,
      posts
    },
  }

}
