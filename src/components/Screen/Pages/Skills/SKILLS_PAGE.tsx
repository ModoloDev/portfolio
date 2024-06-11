import {PAGE} from "../../../App/App.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faAws,
  faCss3Alt,
  faHtml5,
  faJava,
  faJsSquare,
  faNode,
  faPython,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

import './Skills.css'

library.add(faJsSquare, faNode, faCss3Alt, faHtml5, faPython, faJava, faAws, faReact, faAngular)

export const SKILLS_PAGE: PAGE = {
  title: 'SKILLS',
  content: <section className='skills'>
    <div className='skill'><FontAwesomeIcon icon={faJava} className='iconsSkills' title="Java"/></div>
    <div className='skill'><FontAwesomeIcon icon={faAws} className='iconsSkills' title="AWS"/></div>
    <div className='skill'><FontAwesomeIcon icon={faJsSquare} className='iconsSkills' title="JavaScript"/></div>
    <div className='skill'><FontAwesomeIcon icon={faNode} className='iconsSkills' title="NodeJS"/></div>
    <div className='skill'><FontAwesomeIcon icon={faCss3Alt} className='iconsSkills' title="CSS"/></div>
    <div className='skill'><FontAwesomeIcon icon={faHtml5} className='iconsSkills' title="HTML"/></div>
    <div className='skill'><FontAwesomeIcon icon={faPython} className='iconsSkills' title="Python"/></div>
  </section>
}