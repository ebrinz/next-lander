import { useRouter } from 'next/router';

export default function Menu({tags, flex}) {
    const router = useRouter()
    const menuClass = `group flex-1 py-3 px-4 content-after after:block after:h-px after:w-0 after:bg-menuUnderSt
    after:rounded hover:after:w-full hover:after:bg-menuUnderEn after:transition-width after:duration-150 after:ease-in`;
    return (
        <div class={flex}>
            {tags.map((tag, index) =>
                <div key={index}>
                    <div class={tag !== router.query.tag ? menuClass : menuClass + ' font-bold'}>
                        <div class="flex justify-left group-hover:shadow-menuhvr">
                            <div class="cursor-default" onClick={() => router.push(`/${encodeURIComponent(tag)}`).then(() => window.scrollTo(0, 0))}>{tag}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}