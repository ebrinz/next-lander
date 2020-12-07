import { useRouter } from 'next/router';

export default function Menu({tags}) {
    const router = useRouter()
    return (
        <div class="flex justify-center align-center text-sm md:text-md lg:text-lg text-right">
            <ul class="list-none leading-loose cursor-default fixed text-menutxt px-6">
                {tags.map((tag) => (
                    <div class="py-2">
                        <li onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</li>
                    </div>
                ))}
            </ul>
        </div>
    )

}