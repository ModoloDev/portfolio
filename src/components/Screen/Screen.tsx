import './Screen.css'
import Page from "./Pages/Page.tsx";
import {SCREEN} from "../App/App.tsx";

type Props = {
  screen: SCREEN
  changePage: Function
}

export function Screen({screen, changePage}: Props) {
  const page = screen.pages[screen.active]
  return (
    <main>
      <section className='content'>
        <Page
          key={page.title}
          changePage={changePage}
          hasPrev={screen.active != 0}
          hasNext={screen.active < screen.pages.length - 1}
          page={screen.active}
        >
          {page.content}
        </Page>
      </section>
    </main>
  );
};