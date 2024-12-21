import { useState, useEffect } from "react";
import {
  fetchMovies,
  Movie as TMovie,
} from "../../utils/backend-api/API-endpoints/fetchMovie";
import MovieCardComponent from "../movie-card/movie-card.component";
import Spinner from "../spinner/spinner.component";

const MainPanelContainer = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div>
      {movies.length < 1 ? (
        <Spinner />
      ) : (
        <MovieCardComponent key={movies[0].id} movie={movies[0]} />
      )}
    </div>
  );
};

export default MainPanelContainer;
