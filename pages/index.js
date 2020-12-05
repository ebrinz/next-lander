import { getTaggedPosts, getUniqueTags } from '../lib/handlers.js'
import React from 'react'
import { useRouter } from 'next/router'
import siteParams from '../config/params.json'
import postIndex from '../data/index.json'

export default function Tags({tags}) {
    const router = useRouter()
    React.useEffect(() => {
      router.push('/' + tags[0])
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