// import { useParams } from "react-router-dom";
import { Link, Outlet} from "react-router-dom";
const MovieDetails = () => {
    // const { movieId } = useParams();

    return (
        <div>
            <ul>
                <li>
                    <Link to="cast"></Link>
                </li>
                <li>
                    <Link to="reviews"></Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default MovieDetails;