import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/fetchMovies";
import { Link, Outlet,useParams } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState('');

    useEffect(() => {
        getMovieDetails(movieId).then(responce => setDetails(responce), [details])
    })


    return (
        <div>
            <img src="" alt="" />
            <h1>Name movie</h1>
            <p>User score: </p>
            <h2>Overview</h2>
            <p>Опис</p>
            <h2>Genres</h2>
            <p>Жанр</p>
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