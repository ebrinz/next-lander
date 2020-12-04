import { faGithub, faLinkedin, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Topbar(props) {
  return (
    <div class="fixed w-full top-0 z-10 bg-white ">
        <div class="flex justify-between items-center border-b-2 border-gray-100 shadow-md py-6 px-6">
        <div class="lg:w-0 flex-1">
            <div class="flex items-center gap-x-6">
            <a href="#" class="flex">
                <img class="h-8 w-auto md:h-10" src={props.icon} alt="Workflow"/>
            </a>
            <div class="font-mono text-2xl sm:text-4xl select-none">
                {props.title}
            </div>
            </div>
        </div>
        <div class="inline-flex items-end gap-x-3 text-black invisible sm:visible">
            {props.links.github.show && <a class="text-2xl text-gray-800 hover:text-gray-500" href={props.links.github.link}>
                <FontAwesomeIcon icon={faGithub} />
            </a>}
            {props.links.linkedin.show && <a class="text-2xl text-gray-800 hover:text-gray-500" href={props.links.linkedin.link}>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>}
            {props.links.facebook.show && <a class="text-2xl text-gray-800 hover:text-gray-500" href={props.links.facebook.link}>
                <FontAwesomeIcon icon={faFacebook} />
            </a>}
            {props.links.twitter.show && <a class="text-2xl text-gray-800 hover:text-gray-500" href={props.links.twitter.link}>
                <FontAwesomeIcon icon={faTwitter} />
            </a>}
            {props.links.instagram.show && <a class="text-2xl text-gray-800 hover:text-gray-500" href={props.links.instagram.link}>
                <FontAwesomeIcon icon={faInstagram} />
            </a>}
        </div>
        <div class="visible sm:invisible">
            <a class="">
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
        </div>
    </div>
  )
}