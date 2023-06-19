import { useEffect, useState } from "react";
import { Suspense } from "react";
import { getMovieDetails } from "../../services/fetchMovies";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
     const location = useLocation();

    useEffect(() => {
        if (!movieId) return;

        getMovieDetails(movieId).then(response => setMovie(response));
    }, [movieId]);

    const backLink = location.state?.from ?? '/movies';
   
    return (
        <div className={css.wrapper}>
            <Link to={backLink}>
                 Go back
            </Link>
                <div className={css.details}>
                    <img className={css.img} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />
                    
                    <div className={css.movie}>
                            <h1>{movie.title} ({parseInt(movie.release_date)})</h1>
                            <p>User score:  {Math.round(movie.vote_average * 10)}%</p>
                            <h2>Overview</h2>
                            <p>{movie.overview}</p>
                            <h2>Genres</h2>
                            <p>{movie.genres?.map(genre => genre.name).join(' ')}</p>   
                    </div>
                </div>
                
                <div>
                    <h2>Additional in information</h2>
                        <ul>
                            <li>
                                <Link to="cast" state={{ from: backLink }}>Cast</Link>
                            </li>
                            <li>
                                <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
                            </li>
                        </ul>
                         <Suspense fallback={<p>Loading...</p>}>
                            <Outlet />
                        </Suspense>
                </div>
                
        </div>
        
    )
}
export default MovieDetails;