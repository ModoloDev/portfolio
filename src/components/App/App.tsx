import SpaceObjects from "../SpaceObjects/SpaceObjects.tsx";
import Menu from "../Menu/Menu.tsx";
import {Screen} from "../Screen/Screen.tsx";
import React, {useState} from "react";

export type PAGE = {
  title: string
  content: React.JSX.Element
}

export type SCREEN = {
  active: number
  pages: PAGE[]
}

const INITIAL_SCREEN: SCREEN = {
  active: 0,
  pages: [
    {
      title: 'ABOUT ME',
      content: <>
        Hi, my name is Lucas.
        I'm a skilled Software Engineer with over {new Date().getFullYear() - 2021} years in backend development, specializing in Java
        Core and Java frameworks like Spring Boot and Quarkus. Skilled in cloud technologies with AWS
        and Azure, I have a strong grasp of Design Patterns, SOLID principles, Clean Architecture and
        DDD (Domain-Driven Design), ensuring high-quality, scalable, and maintainable code. My
        technical proficiency and strategic approach to cloud infrastructure have driven significant
        improvements in system performance and reliability.
      </>
    },
    {
      title: 'SKILLS',
      content: <></>
    },
    {
      title: 'LANGUAGES',
      content: <></>
    },
    {
      title: 'PROJECTS',
      content: <></>
    },
    {
      title: 'CERTIFICATES',
      content: <></>
    },
    {
      title: 'LINKS',
      content: <></>
    }
  ]
}

function App() {
  const [pages, setPages] = useState(INITIAL_SCREEN)

  function changePage(page: number) {
    setPages(prevState => {
      return {...prevState, active: page}
    })
  }

  return (
    <>
      <Screen screen={pages} changePage={changePage}/>
      <Menu pages={pages} changePage={changePage}/>
      <SpaceObjects/>
    </>
  )
}

export default App
