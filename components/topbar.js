import { faGithub, faLinkedin, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Topbar() {
  return (
    <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6">
        <div class="lg:w-0 flex-1">
            <div class="flex items-center gap-x-6">
            <a href="#" class="flex">
                <img class="h-8 w-auto md:h-10" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Triskele-Symbol-spiral.svg" alt="Workflow"/>
            </a>
            <div class="font-mono text-2xl sm:text-4xl select-none">
                Blog Name Here.
            </div>
            </div>
        </div>
        <div class="inline-flex gap-x-3 text-black invisible sm:visible">
            <a class="text-2xl hover:text-gray-500" href="https://www.youtube.com/watch?v=dGeEuyG_DIc">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a class="text-2xl hover:text-gray-500" href="https://www.youtube.com/watch?v=dGeEuyG_DIc">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a class="text-2xl hover:text-gray-500" href="https://www.youtube.com/watch?v=dGeEuyG_DIc">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a class="text-2xl hover:text-gray-500" href="https://www.youtube.com/watch?v=dGeEuyG_DIc">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a class="text-2xl hover:text-gray-500" href="https://www.youtube.com/watch?v=dGeEuyG_DIc">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        <div class="visible sm:invisible">
            <a class="">
            <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
        </div>
    </div>
    </div>
  )
}