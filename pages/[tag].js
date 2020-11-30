import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Topbar from '../components/topbar.js'
import Body from '../components/body.js'
import { getPosts, getTags } from '../lib/handlers.js'

// import styles from '../styles/Home.module.css'

import siteParams from '../config/params.json'
import postIndex from '../data/index.json'

export default function Tags({params, tags, tagFilter, posts}) {
    const router = useRouter()
    console.log('test router', router.query.tag)

    const handleMenuClick = (e) => {
        tagFilter = e.target.textContent;
        console.log(tagFilter)
    }

    return (
        <div class="">
            <Head>
                <title>{siteParams.title}</title>
                <link rel="icon" href={siteParams.icon} />
            </Head>
            <Topbar icon={siteParams.icon} title={siteParams.title} links={siteParams.links}/>
            {router.isFallback ? (
                <div>Loading…</div>
            ) : (
                <Body tags={tags} posts={posts}/>
            )}
            <div class="flex py-10 justify-center items-center w-full bg-gray-100 absolute">
            </div>
        </div>
    )
}

export async function getStaticProps({params}) {

    const tags = getTags(postIndex);
    const posts = getPosts(postIndex, params.tag);

    return {
        props: {
            postIndex,
            siteParams,
            tags,
            posts
        },
    };

}

export async function getStaticPaths() {
    const tags = getTags(postIndex);
  
    return {
        paths: tags.map((tag) => {
            return {
                params: {
                tag: tag,
                },
            }
        }),
        fallback: false,
    }
  }