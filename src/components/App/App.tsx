import Menu from "../Menu/Menu.tsx";
import {Screen} from "../Screen/Screen.tsx";
import React, {useState} from "react";
import {ABOUT_ME_PAGE} from "../Screen/Pages/AboutMe/ABOUT_ME_PAGE.tsx";
import {SKILLS_PAGE} from "../Screen/Pages/Skills/SKILLS_PAGE.tsx";
import {LANGUAGES_PAGE} from "../Screen/Pages/Languages/LANGUAGES_PAGE.tsx";
import {CERTIFICATES_PAGE} from "../Screen/Pages/Certificates/CERTIFICATES_PAGE.tsx";
import {LINKS_PAGE} from "../Screen/Pages/Links/LINKS_PAGE.tsx";


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
    ABOUT_ME_PAGE,
    SKILLS_PAGE,
    LANGUAGES_PAGE,
    // PROJECTS_PAGE,
    CERTIFICATES_PAGE,
    LINKS_PAGE
  ]
}

function App() {
  const [screen, setScreen] = useState(INITIAL_SCREEN)

  function changePage(page: number) {
    setScreen(prevState => {
      return {...prevState, active: page}
    })
  }

  return (
    <>
      <Screen screen={screen} changePage={changePage}/>
      <Menu screen={screen} changePage={changePage}/>
    </>
  )
}

export default App
