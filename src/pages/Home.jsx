import { useEffect, useState } from "react";
import {getTrendingMovies} from "../services/fetchMovies"

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState('');

    useEffect(() => {
        getTrendingMovies().then(res=>setTrendingMovies(res))
       
    }, [])
    return (
        <div>
            <h1>Trending today</h1> 
            <ul>

            </ul>
            
        </div>
        
    )
};

export default Home;