import React from 'react'
import { getUniqueTags } from '../lib/handlers.js'
import { useRouter } from 'next/router'
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
    return {
        props: {
            tags,
        },
    };
}