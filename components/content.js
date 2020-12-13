import Card from './card.js'
import Menu from './menu.js'

export default function Content({posts, tags}) {

    return (
        <div class="my-20 px-10 py-20 md:py-20 font-mono">
            <div class="grid grid-cols-5 gap-4">
                <div class="col-start-1 col-end-2 invisible md:visible">
                    <div class="flex justify-center align-center fixed text-md md:text-md lg:text-lg text-right">
                        <Menu tags={tags} flex={'flex flex-col'}/>
                    </div>
                </div>
                <div class="col-start-1 col-end-6 md:col-start-2 md:col-end-5">
                    <div class="flex-column justify-center">
                        {posts.map(post => 
                            <Card post={post}/>
                        )}
                    </div>
                </div>
                <div class="col-start-5 col-end-6 invisible md:visible">
                </div>
            </div>
        </div>
    )
}