import Content from './content.js'
import Menu from './menu.js'

export default function Body({posts, tags}) {

    return (
        <div class="my-20 mx-8 py-20">
            <div class="grid grid-cols-5 gap-4">
                <div class="col-start-1 col-end-2 invisible sm:visible">
                    <Menu tags={tags}/>
                </div>
                <div class="col-start-2 col-end-5">
                    <Content posts={posts}/>
                </div>
                <div class="col-start-5 col-end-6 invisible sm:visible">
                </div>
            </div>
        </div>
    )

}