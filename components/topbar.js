import Menu from './menu.js'
import { faGithub, faLinkedin, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Topbar(props) {
  
    return (

        <div class="flex flex-col fixed w-full shadow-toptitle ring-1 ring-titlebrd left-0 top-0 bg-toptitlebg">
            <div class="flex justify-between items-center pt-6 pb-0 md:pb-4 px-6">
                <div class="lg:w-0 flex-1">
                    <div class="flex items-bottom gap-x-6">
                        <a href="#" class="flex items-center">
                            <img class="h-8 w-auto md:h-10" src={props.icon} alt="Workflow"/>
                        </a>
                        <div class="text-2xl md:text-4xl font-title text-toptitle select-none pt-2">
                            {props.title}
                        </div>
                    </div>
                </div>
                <div class="inline-flex items-center gap-x-5 text-black">
                    {props.links.github.show && <a class="text-xl md:text-2xl lg:text-3xl text-gray-800 hover:text-gray-500" href={props.links.github.link}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>}
                    {props.links.linkedin.show && <a class="text-xl md:text-2xl lg:text-3xl text-gray-800 hover:text-gray-500" href={props.links.linkedin.link}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>}
                    {props.links.facebook.show && <a class="text-xl md:text-2xl lg:text-3xl text-gray-800 hover:text-gray-500" href={props.links.facebook.link}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>}
                    {props.links.twitter.show && <a class="text-xl md:text-2xl lg:text-3xl text-gray-800 hover:text-gray-500" href={props.links.twitter.link}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>}
                    {props.links.instagram.show && <a class="text-xl md:text-2xl lg:text-3xl text-gray-800 hover:text-gray-500" href={props.links.instagram.link}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>}
                </div>
            </div>

            <div class="px-6 visible md:invisible h-auto md:h-0">
                <Menu tags={props.tags} flex={'flex flex-row flex-wrap items-center justify-center text-lg'}/>
            </div>

        </div>
    )
}