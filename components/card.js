import ReactMarkdown from 'react-markdown'

export default function Card(props) {
    return (
        <div class="w-full pb-12">
            <div >
                <div class="transition duration-500 ease-in-out shadow-card hover:shadow-cardhvr rounded ring-1 ring-cardbrd ring-offset-0 ring-offset-cardRingColor">
                    <div class="flex flex-row justify-between px-5 py-3 bg-cardTopbg border-b-1 border-cardbrd text-xl" onClick={(e) => console.log(e)}>
                        <a class="text-cardtxt cursor-default text-sm md:text-md lg:text-lg">{props.post.title}</a>
                        <a class="text-cardtxt cursor-default text-xs md:text-sm lg:text-md">{props.post.date}</a>
                    </div>
                    <div class="prose prose-sm font-mono px-6 py-6 bg-cardBodybg rounded-b">
                        <ReactMarkdown source={props.post.content}></ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}