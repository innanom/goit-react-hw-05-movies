import { useEffect, useState } from "react";
import {getTrendingMovies} from "../services/fetchMovies"

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState('');

    useEffect(() => {
        getTrendingMovies().then(response => setTrendingMovies(response));
    }, [trendingMovies])
    return (
        <div>
            <h1>Trending today</h1> 
           
            
        </div>
        
    )
};

export default Home;