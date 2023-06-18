import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/fetchMovies"
import MoviesList from "../components/MoviesList/MoviesList"

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(response => setTrendingMovies(response));
    }, [])

    return (
        <div>
            <h1>Trending today</h1> 
            <MoviesList array={trendingMovies} />
        </div>
        
    )
};

export default Home;