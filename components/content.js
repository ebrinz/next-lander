import Card from './card.js'

export default function Content({posts}) {

    return (
        <div class="flex-column justify-center">
            {posts.map(post => 
                <Card post={post}/>
            )}
        </div>
    )
    
}