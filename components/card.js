import ReactMarkdown from 'react-markdown'

export default function Card(props) {
  return (
    <div class="w-full pb-12">
        <div >
            <div class="transition duration-500 ease-in-out shadow-lg hover:shadow-2xl rounded">
                <div class="flex flex-row justify-between px-5 py-3 bg-gray-500 text-xl font-bold">
                <a>{props.post.title}</a>
                <a>{props.post.date}</a>
                </div>
                <div class="prose px-6 py-6">
                    <ReactMarkdown source={props.post.content}></ReactMarkdown>
                </div>
            </div>
        </div>
    </div>
  )
}