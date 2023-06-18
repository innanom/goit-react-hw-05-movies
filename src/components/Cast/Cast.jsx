import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/fetchMovies"

const Cast = () => {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams()

    useEffect(() => {
        if (!movieId) return;
        getMovieCredits(movieId).then(response => setCast(response)); 
    }, [movieId]);
   
    return (
        (cast.length > 0) ? (
                 <ul>
            {cast.map(({id, profile_path, name, character}) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>                   
            ) : ( <p>We don't have any cast for this movie</p> )
    )
}

export default Cast;