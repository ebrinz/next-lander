import Link from 'next/router'
import Card from './card.js'

export default function Content({posts, tagFilter}) {

    return (

        <div class="col-start-2 col-end-5">
            <div class="flex-column justify-center">
                {posts.filter(post => post.tag.includes(tagFilter)).map(post => 
                    <Card post={post}/>
                )}
            </div>
        </div>

    )

}