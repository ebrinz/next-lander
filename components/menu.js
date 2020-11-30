import Link from 'next/link';

export default function Menu({tags}) {

    return (
        <div class="flex justify-center">
            <ul class="list-none leading-loose cursor-default">
                <p class="font-bold"></p>
                {tags.map((tag) => (
                    <li><Link href={`/${encodeURIComponent(tag)}`}>{tag}</Link></li>
                ))}
            </ul>
        </div>
    )

}