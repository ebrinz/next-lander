import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
    const router = useRouter()
    const feedMode = router.pathname === '/[tag]' ? 1 : 0;
    console.log(props.tag)
    return (
        <div class="w-full pb-12">
            <div>
                <div class="transition duration-500 ease-in-out shadow-card hover:shadow-cardhvr rounded ring-1 ring-cardbrd ring-offset-0 ring-offset-cardRingColor">
                    <div class="flex flex-row justify-between px-5 py-3 bg-cardTopbg border-b-1 border-cardbrd text-xl"
                        onClick={() => {
                            feedMode == 1 
                            ? 
                                router.push('/x/' + props.post.slug)
                            : 
                                router.push('/'+ props.post.tag)
                            }
                        }
                    >
                        <a class="text-cardtxt cursor-default text-sm md:text-md lg:text-lg">{props.post.title}</a>
                        <a class="text-cardtxt cursor-default text-sm md:text-md lg:text-lg">
                            {
                                feedMode == 1 
                                ? 
                                    <FontAwesomeIcon icon={['fas', 'share']}></FontAwesomeIcon> 
                                : 
                                    <FontAwesomeIcon icon={['fas', 'times']}></FontAwesomeIcon>  
                            }
                        </a>
                    </div>
                    <div class="bg-cardBodybg text-menutxt rounded-b prose-sm font-mono px-6 py-6 break-words rounded-b">
                        <ReactMarkdown escapeHtml={false} source={props.post.content}></ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}