import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListTrendingMovies = ({ array }) => {
    const location = useLocation();
    return (
        <ul>
            {array.map(({ title, id }) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
     );
};

export default ListTrendingMovies;

ListTrendingMovies.propTypes = {
    array: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            id: PropTypes.number,
        }))
}