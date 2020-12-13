import { useRouter } from 'next/router';

export default function Menu({tags, flex}) {
    const router = useRouter()
    return (
        <div class={flex}>
             {/* cursor-default text-menutxt px-6 */}
            {tags.map(tag => {
                return tag !== router.query.tag
                ?
                <div class="flex-1 py-3 px-4 content-after
                after:block after:h-0.5 after:w-0 after:bg-gray-200 after:rounded 
                hover:after:w-full hover:after:bg-gray-300 
                after:transition-width after:duration-2000 after:ease-in">
                    <div class="flex justify-center">
                        <div key='' onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</div>
                    </div>
                </div>
                :
                <div class="flex-1 py-3 px-4 content-after
                after:block after:h-0.5 after:w-full after:bg-indigo-900 after:rounded" >
                    <div class="flex justify-center">
                        <div key='' onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</div>
                    </div>
                </div>
            })}
        </div>
    )

}