import { useState } from "react";
import useMovies from "../../hooks/useMovies"; // Custom hook for movie fetching
import {
  changeMovies,
  MOVIE_STATUS_SET,
} from "../../utils/backend-api/API-endpoints/movie.PATCH";
import { useSwipeToReject } from "../../hooks/useSwipeToReject";
import ProcessingOverlay from "../ProcessingOverlay/processing-overlay.component";
import MoviePanel from "../movie-panel/movie-panel.component";
import MovieRatingContent from "../movie-rating-content/movie-rating-content.component";
import { MovieFeedbackPanelContainer } from "./movie-feedback-panel.styles";

const MovieFeedbackPanel = () => {
  const { loading, movies, currentIndex, nextMovie, allRated } = useMovies();
  const [isProcessing, setIsProcessing] = useState(false);

  const currentMovie = movies[currentIndex];

  const handleDecision = async (
    //backend gets notified of the user's decision
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
    //listen to swipe
    handleDecision,
    currentMovie ? currentMovie.id : ""
  );

  return (
    <MovieFeedbackPanelContainer>
      <MovieRatingContent
        loading={loading}
        moviesLength={movies.length}
        allRated={allRated}
        currentMovie={currentMovie}
      />
      {currentMovie && !allRated && (
        <>
          <ProcessingOverlay isProcessing={isProcessing}>
            <MoviePanel
              movie={currentMovie}
              handleDecision={(decision) =>
                handleDecision(currentMovie.id, decision)
              }
              handleTouchStart={handleTouchStart}
              handleTouchEnd={handleTouchEnd}
            />
          </ProcessingOverlay>
        </>
      )}
    </MovieFeedbackPanelContainer>
  );
};

export default MovieFeedbackPanel;
