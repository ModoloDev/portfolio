import './Screen.css'
import {SCREEN} from "../App/App.tsx";
import NavigationButton from "./NavigationButton/NavigationButton.tsx";

type Props = {
  screen: SCREEN
  changePage: Function
}

export function Screen({screen, changePage}: Props) {
  const pageIndex = screen.active;
  const page = screen.pages[pageIndex]

  return (
    <main>
      <section className='content'>
        <section className='animate__animated animate__fadeIn page'>
          {page.content}
          {screen.active != 0 && <NavigationButton direction='prev' changePage={() => changePage(pageIndex - 1)}/>}
          {screen.active < screen.pages.length - 1 && <NavigationButton direction='next' changePage={() => changePage(pageIndex + 1)}/>}
        </section>
      </section>
    </main>
  );
};