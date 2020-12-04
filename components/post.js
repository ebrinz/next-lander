import ReactMarkdown from 'react-markdown'

export default function Post(props) {
    return (
        <div class="w-full pb-12">
            <div >
                <div class="flex-column justify-center px-5 py-3 text-xl font-bold">
                <a>{props.post.title}</a>
                <a>{props.post.date}</a>
                </div>
                <div class="prose px-6 py-6">
                    <ReactMarkdown source={props.post.content}></ReactMarkdown>
                </div>

            </div>
        </div>
    )
}