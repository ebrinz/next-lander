export default function Menu({tags, menuClick}) {

    return (
        <div class="flex justify-center">
            <ul class="list-none leading-loose cursor-default">
                <p class="font-bold">Tags</p>
                {tags.map((tag) => (
                    <li class="ml-3 list-inside cursor-pointer" onClick={menuClick}>{tag}</li>
                ))}
            </ul>
        </div>
    )

}