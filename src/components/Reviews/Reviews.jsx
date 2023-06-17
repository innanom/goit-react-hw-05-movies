import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/fetchMovies"

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams()
    
    useEffect(() => {
        if (!movieId) return;
        getMovieReviews(movieId).then(response => setReviews(response));
    }, [movieId]);

    console.log(reviews);

    return (
       
        (reviews.length > 0) ? (
                 <ul>
                    {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <span>Author: {author}</span>
                        <p>{ content }</p>
                    </li>
                     ))}
                </ul>
                   
            ) : ( <p>We don't have any reviews for this movie</p> )
        
    )
};
export default Reviews;
