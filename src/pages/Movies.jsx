import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchMoviesForm from "../components/SearchMoviesForm/SearchMoviesForm"
import { searchMovies } from "../services/fetchMovies"
import MoviesList from "../components/MoviesList/MoviesList";

const Movies = () => {
    const [movieFound, setMovieFound] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const newMovie = searchParams.get("query") ?? "";

    useEffect(() => {
          if (!newMovie) return;
        searchMovies(newMovie).then(res => setMovieFound(res.results));
    }, [newMovie, setSearchParams]);

     const handleSubmit = newQuery => {
        setSearchParams({ query: newQuery });
    };

    return (
        <div>
            <SearchMoviesForm onSubmit={handleSubmit} />
            {movieFound && <MoviesList array={movieFound}/>}
        </div>
    )
};

export default Movies;

