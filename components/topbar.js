import Menu from './menu.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../public/logo.svg'

export default function Topbar(props) {
    return (
        <div class="flex flex-col fixed w-full shadow-toptitle ring-1 ring-titlebrd left-0 inset-x-0 top-px bg-toptitlebg">
            <div class="flex justify-between items-center pt-6 pb-0 md:pb-4 px-6">
                <div class="lg:w-0 flex-1">
                    <div class="flex items-center gap-x-6">
                        <div class="fill-current text-iconcolor block md:hidden">
                            <Logo height={parseInt(props.mbTitleSize)} width={parseInt(props.mbTitleSize)}/>
                        </div>
                        <div class="fill-current text-iconcolor hidden md:block">
                            <Logo height={parseInt(props.titleSize)} width={parseInt(props.titleSize)}/>
                        </div>
                        <div class="text-titleMb md:text-titleLg font-title text-toptitle select-none">
                            {props.title}
                        </div>
                    </div>
                </div>
                <div class="inline-flex items-center space-x-2 md:space-x-5 text-black flex-wrap pl-4">
                    {props.links.map((link, index) => 
                        <a key={index} class="text-xl md:text-2xl lg:text-3xl text-toplink hover:text-toplinkRO" href={link.url}>
                            <FontAwesomeIcon icon={['fab', link.icon]} />
                        </a>
                    )}
                </div>
            </div>
            <div class="px-6 visible md:invisible h-auto md:h-0">
                <Menu tags={props.tags} flex={'flex flex-row flex-wrap items-center justify-center font-mono text-sm text-topmenutxt'}/>
            </div>
        </div>
    )
}