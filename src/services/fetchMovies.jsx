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
console.log(getTrendingMovies());
