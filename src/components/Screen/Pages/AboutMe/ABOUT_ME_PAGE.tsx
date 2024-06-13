import {PAGE} from "../../../App/App.tsx";
import {TypeAnimation} from "react-type-animation";

import "./AboutMe.css"

const CURSOR_CLASS_NAME = 'index-module_type__E-SaG';

export const ABOUT_ME_PAGE: PAGE = {
  title: 'About Me',
  content: <section className='aboutMe'>
    <TypeAnimation
      splitter={(str) => str.split(/(?= )/)}
      speed={{ type: 'keyStrokeDelayInMs', value: 40 }}
      className={'paragraph'}
      sequence={[
        `Hey there! Welcome to my Portfolio!
        
        
        My name is Lucas, I'm a Software Engineer with over ${new Date().getFullYear() - 2021} years of experience in backend development. I love working with Core Java and frameworks like Spring Boot and Quarkus. I'm also pretty savvy with cloud tech, using AWS and Azure. 
        
        I'm all about design patterns, SOLID principles, Clean Architecture, and Domain-Driven Design to keep my code high-quality, scalable, and easy to maintain. My tech skills and strategic thinking in cloud infrastructure have really helped boost system performance and reliability.
        
        Feel free to check out my site to know me better!`,
        6000,
        (el) => el?.classList.remove(CURSOR_CLASS_NAME)
      ]}
    />
  </section>
}