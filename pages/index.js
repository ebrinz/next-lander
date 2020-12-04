
import Head from 'next/head'
import Topbar from '../components/topbar.js'
import Body from '../components/body.js'
import { getTaggedPosts, getUniqueTags } from '../lib/handlers.js'
// import styles from '../styles/Home.module.css'
import React from 'react'
import { useRouter } from 'next/router'
import siteParams from '../config/params.json'
import postIndex from '../data/index.json'

export default function Tags({siteParams, tags, posts}) {
    const router = useRouter()
    React.useEffect(() => {
      router.push('/'+tags[0])
      });
    return null
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
    };
}