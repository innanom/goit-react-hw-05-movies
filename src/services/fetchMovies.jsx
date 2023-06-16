import axios from 'axios';

const request =  axios.create ( { 
    baseURL: 'https://www.themoviedb.org/', 
    params: {
        API_KEY: '3f49b3b9ed9e869041581873eb04aafc',
    }
} ) ;

export async function getTrendingMovies() {
  try {
    const response = await request.get('/trending/get-trending');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
console.log(getTrendingMovies());
