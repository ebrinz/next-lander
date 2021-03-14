import Card from './card.js'
import Menu from './menu.js'
import { useRouter } from 'next/router'

export default function TaggedContent({posts, tags}) {
    const router = useRouter()
    console.log('p', posts)
    return (
        <div class="my-20 px-16 py-20 md:py-20 font-mono">
            <div class="grid grid-cols-5 gap-4">
                <div class="col-start-1 col-end-2 invisible md:visible flex justify-start">
                    <div class="fixed text-md md:text-lg text-right ml-7 mt-6">
                        <Menu tags={tags} flex={'flex flex-col text-menutxt'}/>
                    </div>
                </div>
                <div class="col-start-1 col-end-6 md:col-start-2 md:col-end-6 lg:col-end-5">
                    <div class="flex-column justify-center">
                        {posts.map((post, index) => 
                            <Card key={index} post={post}/>
                        )}
                    </div>
                </div>
                <div class="col-start-5 col-end-6 invisible lg:visible">
                </div>
            </div>
        </div>
    )
}