import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Topbar from '../components/topbar.js'
import Content from '../components/content.js'
import { getTaggedPosts, getUniqueTags } from '../lib/handlers.js'
import siteParams from '../config/params.json'
import postIndex from '../data/index.json'


export default function Tags({siteParams, tags, posts}) {
    const router = useRouter()
    
    React.useEffect(() => {

      });
    
    return (
        <div key="0">
            <Head>
                <title>{siteParams.title}</title>
                <link rel="icon" href={siteParams.icon} />
            </Head>
            <Topbar tags={tags} icon={siteParams.icon} title={siteParams.title} links={siteParams.links}/>
            <Content tags={tags} posts={posts}/>
            {/* <div class="flex justify-center items-center w-full bg-gray-100 absolute">
            </div> */}
        </div>
    )
}

export async function getStaticProps({params}) {
    const tags = getUniqueTags(postIndex);
    const posts = getTaggedPosts(postIndex, params.tag);
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
    const tags = getUniqueTags(postIndex);
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