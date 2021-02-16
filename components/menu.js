import { useRouter } from 'next/router';

export default function Menu({tags, flex}) {
    const router = useRouter()
    return (
        <div class={flex}>
            {tags.map((tag, index) => {
                return tag !== router.query.tag
                ?
                <div key={index}>
                    <div class="group flex-1 py-3 px-4 content-after relative
                    after:block after:h-px after:w-0 after:bg-menuUnderSt
                    hover:after:w-full hover:after:bg-menuUnderEn 
                    after:transition-width after:duration-150 after:ease-in">
                        <div class="flex justify-center group-hover:shadow-menuhvr">
                            <div class="cursor-default" onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</div>
                        </div>
                    </div>
                </div>
                :
                <div key={index}>
                    <div class="group flex-1 py-3 px-4 font-bold content-after
                    after:block after:h-px after:w-0 after:bg-menuUnderSt after:rounded
                    hover:after:w-full hover:after:bg-menuUnderEn
                    after:transition-width after:duration-150 after:ease-in">
                        <div class="flex justify-center group-hover:shadow-menuhvr">
                            <div class="cursor-default" onClick={() => router.push(`/${encodeURIComponent(tag)}`)}>{tag}</div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )

}