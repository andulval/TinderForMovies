import { useState, useEffect } from "react";
import {
  fetchMovies,
  Movie as TMovie,
} from "../../utils/backend-api/API-endpoints/movie.GET";
import MovieCardComponent from "../movie-card/movie-card.component";
import Spinner from "../spinner/spinner.component";
import {
  changeMovies,
  MOVIE_STATUS_SET,
} from "../../utils/backend-api/API-endpoints/movie.PATCH";
import { Overlay } from "./main-panel-container.styles";

const MainPanelContainer = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const initialMovies =
          await fetchMovies(/* Optional: Add paging parameters */); /*From backend API:  Add paging parameters for optimization */
        setMovies(initialMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const handleDecision = async (
    movieId: string,
    decision: MOVIE_STATUS_SET
  ) => {
    if (isProcessing) return; // Prevent multiple simultaneous actions
    setIsProcessing(true);
    try {
      await changeMovies(movieId, decision);
      if (currentIndex + 1 >= movies.length) {
        //If backend provides pagination: Load more movies if available
        const newMovies =
          await fetchMovies(/* Optional: Add paging parameters */);
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      }
      setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next movie
    } catch (error) {
      console.error("Error processing movie decision:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading && movies.length === 0) return <Spinner />;

  const currentMovie = movies[currentIndex];

  return (
    <div>
      {isProcessing && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
      {currentMovie ? (
        <MovieCardComponent
          movie={currentMovie}
          acceptHandler={() =>
            handleDecision(currentMovie.id, MOVIE_STATUS_SET.accept)
          }
          rejectHandler={() =>
            handleDecision(currentMovie.id, MOVIE_STATUS_SET.reject)
          }
        />
      ) : (
        <p>No more movies available.</p>
      )}
    </div>
  );
};

export default MainPanelContainer;
