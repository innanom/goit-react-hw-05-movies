import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const SearchMoviesForm = ({onSubmit}) =>  {

  const [searchMovies, setSearchMovies] = useState('');
  
  const handleChange = event => {
    setSearchMovies(event.currentTarget.value.toLowerCase());
  }

  const handleSubmit = event => {
    event.preventDefault();

      if (searchMovies.trim() === '') {
        toast.error("Enter data to search")
        return;
      }

    onSubmit(searchMovies);
    setSearchMovies('');
  }
    return (
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchMovies}
              onChange={handleChange}
            />
            <button type="submit">
            Search
            </button>
        </form>
    )
}

export default SearchMoviesForm;

SearchMoviesForm.propTypes = {
    onSubmit: PropTypes.func,
       
}