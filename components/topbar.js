import Menu from './menu.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Star from '../public/celtic-spiral.svg'

export default function Topbar(props) {
    return (
        <div class="flex flex-col fixed w-full shadow-toptitle ring-1 ring-titlebrd left-0 top-0 bg-toptitlebg">
            <div class="flex justify-between items-center pt-6 pb-0 md:pb-4 px-6">
                <div class="lg:w-0 flex-1">
                    <div class="flex items-bottom gap-x-6">
                        <div class="fill-current text-toptitle" >
                            <Star height={50} width={50}/>
                        </div>
                        <div class="text-4xl lg:text-6xl font-title text-toptitle select-none pt-2">
                            {props.title}
                        </div>
                    </div>
                </div>
                <div class="inline-flex items-center gap-x-5 text-black">
                    {props.links.map((link, index) => 
                        <a key={index} class="text-xl md:text-2xl lg:text-3xl text-gray-800 hover:text-gray-500" href={link.url}>
                            <FontAwesomeIcon icon={['fab', link.icon]} />
                        </a>
                    )}
                </div>
            </div>
            <div class="px-6 visible md:invisible h-auto md:h-0">
                <Menu tags={props.tags} flex={'flex flex-row flex-wrap items-center justify-center font-mono text-sm'}/>
            </div>
        </div>
    )
}