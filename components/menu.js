import { useRouter } from 'next/router';

export default function Menu({tags}) {
    const router = useRouter()
    return (
        <div class="flex justify-center align-center text-sm md:text-md lg:text-lg text-right">
            <ul class="list-none leading-loose cursor-default fixed text-menutxt px-6">
                {tags.map((tag) => (
                    <div class="py-2 content-before content-after content-hover-before 
                    after:block after:h-0.5 after:w-5 after:bg-gray-400 after:rounded 
                    hover:after:w-10 hover:after:bg-indigo-900 
                    after:transition-width after:duration-2000 after:ease-in-out" 
                    tw-content-after="">
                        <div onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</div>
                    </div>
                ))}
            </ul>
        </div>
    )

}