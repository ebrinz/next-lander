import Card from './card.js'
import Post from './post.js'

export default function Content({posts}) {
    console.log('len', posts.length)
    if (posts.length > 1) {
        return (
            <div class="flex-column justify-center">
                {posts.map(post => 
                    <Card post={post}/>
                )}
            </div>
        )
    } else {
        return (
            <div class="flex-column justify-center">
                <Post post={posts[0]}/>
            </div> 
        )
    }
    

}