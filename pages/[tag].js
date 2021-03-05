import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Topbar from '../components/topbar.js'
import TaggedContent from '../components/taggedContent.js'
import { getTaggedPosts, getUniqueTags, readMetaData } from '../lib/handlers.js'
import siteParams from '../config/params.json'


export default function Tags({siteParams, tags, posts}) {
    const router = useRouter()
    React.useEffect(() => {

      });
    console.log('props', posts)
    return (
        <div key="0">
            <Head>
                <title>{siteParams.title}</title>
                <link rel="icon" href={siteParams.icon} />
            </Head>
            <div class="flex flex-col min-h-screen">
                <div class="flex-grow bg-bodybg">
                    <Topbar tags={tags} icon={siteParams.icon} titleSize={siteParams.titleSize} mbTitleSize={siteParams.mobileTitleSize} title={siteParams.title} links={siteParams.links}/>
                    <TaggedContent tags={tags} posts={posts}/>
                </div>
                <div class="bg-bodybg">
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({params}) {
    const postIndex = readMetaData();
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
    const postIndex = readMetaData();
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