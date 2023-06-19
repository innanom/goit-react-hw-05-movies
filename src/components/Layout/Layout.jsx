import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./Layout.module.css";



const Layout = () => {
    return (
        <div>
            <header className={css.header}>
                <ul className={css.header_list}>
                    <li className={css.header_item}>
                        <Link to="/" className={css.header_link}>Home</Link>
                    </li >
                    <li className={css.header_item}>
                    <   Link to="/movies" className={css.header_link}>Movies</Link>
                    </li>
                </ul>
            </header>
            <main>
                 <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
                  
            </main>
        </div>
    )
};
export default Layout;