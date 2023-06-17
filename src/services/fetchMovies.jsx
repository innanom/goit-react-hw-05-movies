import axios from 'axios';

const request =  axios.create ( { 
    baseURL: 'https://api.themoviedb.org/3', 
    params: {
        api_key: '3f49b3b9ed9e869041581873eb04aafc',
    },
} ) ;

export const getTrendingMovies = async () => {
  try {
    const { data } = await request.get('/trending/movie/day');
    return data.results;
   
  } catch (error) {
    return error.message;
  }
}
// console.log(getTrendingMovies());

// export const searchMovies = async query => {
//   try {
//     const { data } = await request.get('/search/movie', {
//       params: {language: 'en-US', page: 1, include_adult: false, query}
//     });
//     return data;
   
//   } catch (error) {
//     return error.message;
//   }
// }
// console.log(searchMovies());


export const getMovieDetails = async movie_id => {
  try {
    const { data } = await request.get(`/movie/${movie_id}`, {
      params: {language: 'en-US' },
    });
    return data;
   
  } catch (error) {
    return error.message;
  }
}
// console.log(getMovieDetails());

export const getMovieCredits = async movie_id => {
  try {
    const { data } = await request.get(`movie/${movie_id}/credits`, {
      params: { language: 'en-US'}
    });
    return data.cast;
   
  } catch (error) {
    return error.message;
  }
}
// console.log(getMovieCredits());

export const getMovieReviews = async movie_id => {
  try {
    const { data } = await request.get(`movie/${movie_id}/reviews`, {
      params: { language: 'en-US'}
    });
    return data.results;
   
  } catch (error) {
    return error.message;
  }
}
// console.log(getMovieReviews());





