// import { useParams } from "react-router-dom";
import { Link, Outlet} from "react-router-dom";
const MovieDetails = () => {
    // const { movieId } = useParams();

    return (
        <div>
            <h2>Additional in information</h2>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default MovieDetails;