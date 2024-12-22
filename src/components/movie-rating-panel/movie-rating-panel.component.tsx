import { useState } from "react";
import useMovies from "../../hooks/useMovies"; // Custom hook for movie fetching
import MovieCardComponent from "../movie-card/movie-card.component";
import Spinner from "../spinner/spinner.component";
import MovieDecision from "../movie-decision/movie-decision.component";
import {
  changeMovies,
  MOVIE_STATUS_SET,
} from "../../utils/backend-api/API-endpoints/movie.PATCH";
import { MoviePanelWrapper, Overlay } from "./movie-rating-panel.styles";
import { useSwipeToReject } from "../../hooks/useSwipeToReject";

const MovieRatingPanel = () => {
  const { loading, movies, currentIndex, nextMovie, allRated } = useMovies();
  const [isProcessing, setIsProcessing] = useState(false);

  const currentMovie = movies[currentIndex];

  const handleDecision = async (
    movieId: string,
    decision: MOVIE_STATUS_SET
  ) => {
    if (isProcessing) return; // Prevent multiple simultaneous actions
    setIsProcessing(true); // Set processing flag to true, showing overlay

    try {
      await changeMovies(movieId, decision); // Call the backend API to register the decision
      nextMovie(); // Move to the next movie
    } catch (error) {
      console.error("Error processing movie decision:", error);
    } finally {
      setIsProcessing(false); // Reset processing state
    }
  };

  const { handleTouchStart, handleTouchEnd } = useSwipeToReject(
    handleDecision,
    currentMovie ? currentMovie.id : ""
  );

  if (loading && movies.length === 0) return <Spinner />;

  if (allRated) {
    return <p>You have rated all the movies! Thank you for your feedback.</p>;
  }

  if (!currentMovie) {
    return <p>No more movies available.</p>;
  }

  return (
    <>
      {isProcessing && (
        <Overlay>
          <Spinner />
        </Overlay>
      )}
      <MoviePanelWrapper
        onTouchStart={handleTouchStart} // Detect touch start
        onTouchEnd={handleTouchEnd} // Detect touch end
      >
        <MovieCardComponent movie={currentMovie} />
        <MovieDecision
          onDecision={(decision) => handleDecision(currentMovie.id, decision)}
        />
      </MoviePanelWrapper>
    </>
  );
};

export default MovieRatingPanel;
