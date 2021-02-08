import { useRouter } from 'next/router';

export default function Menu({tags, flex}) {
    const router = useRouter()
    return (
        <div class={flex}>
             {/* cursor-default text-menutxt px-6 */}
            {tags.map((tag, index) => {
                return tag !== router.query.tag
                ?
                <div key={index}>
                    <div class="flex-1 py-3 px-4 content-after relative
                    after:block after:h-0.5 after:w-0 after:bg-gray-200
                    hover:after:w-full hover:after:bg-gray-300 
                    after:transition-width after:duration-1000 after:ease-in">
                        <div class="flex justify-center">
                            <div class="cursor-default" onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</div>
                        </div>
                    </div>
                </div>
                :
                <div key={index}>
                    <div class="flex-1 py-3 px-4 font-bold content-after
                    after:block after:h-0.5 after:w-0 after:bg-gray-200 after:rounded 
                    hover:after:w-full hover:after:bg-gray-300
                    after:transition-width after:duration-1000 after:ease-in">
                        <div class="flex justify-center">
                            <div class="cursor-default" onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )

}