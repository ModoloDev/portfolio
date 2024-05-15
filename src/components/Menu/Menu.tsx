import './Menu.css'
import {SCREEN} from "../App/App.tsx";

type Props = {
    pages: SCREEN,
    changePage: Function
}

export default function Menu({pages, changePage}: Props) {
    return (
        <footer className="menu">
            {pages.pages.map((page, pageIndex) => {
                return (
                    <button
                        key={page.title}
                        className={pages.active === pageIndex ? 'active' : undefined}
                        onClick={() => changePage(pageIndex)}
                    >
                        {page.title}
                    </button>
                )
            })}
        </footer>
    );
};