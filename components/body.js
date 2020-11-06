import Card from './card.js'

export default function Body({posts}) {
  return (
    <div class="my-20 mx-8">
        <div class="grid grid-cols-5 gap-4">
            <div class="col-start-1 col-end-2 invisible sm:visible">
                <div class="flex justify-center">
                    <ul class="list-none leading-loose">
                        <p class="font-bold">Tags</p>
                        <li class="ml-3 list-inside"><a href="default.asp">Words</a></li>
                        <li class="ml-3 list-inside"><a href="news.asp">Repos</a></li>
                        <li class="ml-3 list-inside"><a href="contact.asp">Songs</a></li>
                        <br/>
                        <p class="font-bold">Misc</p>
                        <li class="ml-3 list-inside"><a href="about.asp">About</a></li>
                    </ul>
                </div>
            </div>
                <div class="col-start-2 col-end-5">
                    <div class="flex-column justify-center">
                        {posts.map((post) => (
                           <Card post={post}/>
                        ))}
                    </div>
                </div>
                <div class="col-start-5 col-end-6  invisible sm:visible">
            </div>
        </div>
    </div>
  )
}