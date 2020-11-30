import { useRouter } from 'next/router';

export default function Menu({tags}) {
    const router = useRouter()
    return (
        <div class="flex justify-center">
            <ul class="list-none leading-loose cursor-default">
                <p class="font-bold"></p>
                {tags.map((tag) => (
                    <li onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</li>
                ))}
            </ul>
        </div>
    )

}