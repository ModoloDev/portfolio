import './Menu.css'
import {SCREEN} from "../App/App.tsx";

type Props = {
    screen: SCREEN,
    changePage: Function
}

export default function Menu({screen, changePage}: Props) {
    return (
        <footer className="menu">
            {screen.pages.map((page, pageIndex) => {
                return (
                    <button
                        key={page.title}
                        className={screen.active === pageIndex ? 'active' : undefined}
                        onClick={() => changePage(pageIndex)}
                    >
                        {page.title}
                    </button>
                )
            })}
        </footer>
    );
};