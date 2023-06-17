import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews"
import Layout from "./Layout/Layout";


export const App = () => {
  return (
    <div>
      

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails/>} >
              <Route path="cast" element={<Cast/> } />
              <Route path="reviews" element={<Reviews/> }/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};


// 3f49b3b9ed9e869041581873eb04aafc

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjQ5YjNiOWVkOWU4NjkwNDE1ODE4NzNlYjA0YWFmYyIsInN1YiI6IjY0OGFmYmYwMDc2Y2U4MDEwNjEwMTc1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GRcatGJDhq8BzZLBoz5n1YZv8APbJgWp7KEoPDcObZo
