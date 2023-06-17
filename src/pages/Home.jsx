import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/fetchMovies"
import ListTrendingMovies from "../components/ListTrendingMovies/ListTrendingMovies"

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(response => setTrendingMovies(response));
    }, [])

    return (
        <div>
            <h1>Trending today</h1> 
            <ListTrendingMovies array={trendingMovies} />
        </div>
        
    )
};

export default Home;