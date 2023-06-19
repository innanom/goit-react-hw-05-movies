import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import {Header} from "./Layout.styled.jsx"


const Layout = () => {
    return (
        <div>
            <Header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <   Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </Header>
            <main>
                 <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
                  
            </main>
        </div>
    )
};
export default Layout;