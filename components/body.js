import Card from './card.js'

export default function Body() {
  return (
    <div class="my-20 mx-8">
        <div class="grid grid-cols-5 gap-4">
            <div class="col-start-1 col-end-2">
                <div class="flex justify-center">
                    <ul class="">
                        <p>Posts</p>
                        <li class="ml-3"><a href="default.asp">Home</a></li>
                        <li class="ml-3"><a href="news.asp">News</a></li>
                        <li class="ml-3"><a href="contact.asp">Contact</a></li>
                        <p>Misc</p>
                        <li class="ml-3"><a href="about.asp">About</a></li>
                    </ul>
                </div>
            </div>
                <div class="col-start-2 col-end-5">
                    <div class="flex justify-center">
                        <Card/>
                    </div>
                </div>
                <div class="col-start-5 col-end-6">
            </div>
        </div>
    </div>
  )
}