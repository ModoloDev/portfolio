import {PAGE} from "../../../App/App.tsx";
import {library} from "@fortawesome/fontawesome-svg-core";

import './Links.css'
import {faGithub, faLinkedinIn, faStackOverflow, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faLinkedinIn, faGithub, faXTwitter, faStackOverflow)

export const LINKS_PAGE: PAGE = {
  title: 'Links',
  content: <section className="links">
    <a className="link" href="https://www.modolo.dev/linkedin" target="_blank">
      <FontAwesomeIcon icon={faLinkedinIn} className='iconsLinks'/>
      <p>Lucas Modolo</p>
    </a>
    <a className="link" href="https://www.modolo.dev/github" target="_blank">
      <FontAwesomeIcon icon={faGithub} className='iconsLinks'/>
      <p>ModoloDev</p>
    </a>
    <a className="link" href="https://twitter.com/LucasModolo" target="_blank">
      <FontAwesomeIcon icon={faXTwitter} className='iconsLinks'/>
      <p>LucasModolo</p>
    </a>
    <a className="link" href="https://stackoverflow.com/users/14142959/lucas-modolo" target="_blank">
      <FontAwesomeIcon icon={faStackOverflow} className='iconsLinks'/>
      <p>Lucas Modolo</p>
    </a>
  </section>
}