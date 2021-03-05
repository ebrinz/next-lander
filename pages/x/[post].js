import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Topbar from '../../components/topbar.js'
import SinglePost from '../../components/singlePost.js'
import { getTaggedPosts, getUniqueTags, readMetaData, getPost } from '../../lib/handlers.js'
import siteParams from '../../config/params.json'


export default function Tags({siteParams, tags, post}) {
    const router = useRouter()
    React.useEffect(() => {
      });
    return (
        <div key="0">
            <Head>
                <title>{siteParams.title}</title>
                <link rel="icon" href={siteParams.icon} />
            </Head>
            <div class="flex flex-col min-h-screen">
                <div class="flex-grow bg-bodybg">
                    <Topbar tags={tags} icon={siteParams.icon} titleSize={siteParams.titleSize} mbTitleSize={siteParams.mobileTitleSize} title={siteParams.title} links={siteParams.links}/>
                    <SinglePost tags={tags} post={post}/>
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
    const post = getPost(params.post);
    return {
        props: {
            postIndex,
            siteParams,
            tags,
            post
        },
    };
}

export async function getStaticPaths() {
    const postIndex = readMetaData();
    const posts = getTaggedPosts(postIndex, 'allPosts');
    return {
        paths: posts.map((post) => {
            return {
                params: {
                post: post.slug,
                },
            }
        }),
        fallback: false,
    }
}