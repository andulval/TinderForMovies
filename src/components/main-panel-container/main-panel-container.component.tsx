import { useState, useEffect, useRef } from "react";
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
  const [loading, setLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(6);
  const [allRated, setAllRated] = useState(false); //to track if all movies are rated
  // Store the movie list in a ref to persist it without causing re-renders
  const moviesRef = useRef<TMovie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const initialMovies =
          await fetchMovies(/* Optional: Add paging parameters */); /*From backend API:  Add paging parameters for optimization */
        moviesRef.current = initialMovies; // Save the movie list in ref
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
      if (currentIndex + 1 >= moviesRef.current.length) {
        // If we've reached the end of the list, set `allRated` to true
        setAllRated(true);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next movie
      }
    } catch (error) {
      console.error("Error processing movie decision:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle loading and no movies scenario
  if (loading && moviesRef.current.length === 0) return <Spinner />;

  const currentMovie = moviesRef.current[currentIndex];

  // If there are no movies available or all have been rated
  if (allRated) {
    return <p>You have rated all the movies! Thank you for your feedback.</p>;
  }

  if (
    moviesRef.current.length === 0 ||
    currentIndex >= moviesRef.current.length
  ) {
    return <p>No more movies available.</p>;
  }

  return (
    <div>
      {isProcessing && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
      {currentMovie && (
        <MovieCardComponent
          movie={currentMovie}
          acceptHandler={() =>
            handleDecision(currentMovie.id, MOVIE_STATUS_SET.accept)
          }
          rejectHandler={() =>
            handleDecision(currentMovie.id, MOVIE_STATUS_SET.reject)
          }
        />
      )}
    </div>
  );
};

export default MainPanelContainer;
