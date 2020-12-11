import { faGithub, faLinkedin, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Topbar(props) {
  
    return (

        <div class="fixed w-full shadow-toptitle ring-1 ring-titlebrd left-0 top-0 bg-toptitlebg">
            <div class="flex justify-between items-center pt-6 pb-4 px-6">

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

                {/* <div class="visible md:invisible">
                    <a onClick={menuControl} class="text-xl">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                    <div class={menuStyle}>
                        <div onClick={menuControl} >
                            <a>exit</a>
                        </div>
                        <div>
                            <l>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </l>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}