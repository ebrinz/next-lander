import React from 'react'
import { getUniqueTags, readMetaData } from '../lib/handlers.js'
import { useRouter } from 'next/router'

export default function Tags({tags}) {
    const router = useRouter();
    React.useEffect(() => {
      router.push('/' + tags[0]);
      });
    return null
}

export async function getStaticProps() {
    const postIndex = readMetaData();
    const tags = getUniqueTags(postIndex);
    return {
        props: {
            tags,
        },
    };
}