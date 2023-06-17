import { Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <   Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
};
export default Layout;