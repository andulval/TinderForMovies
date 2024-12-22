import { Movie } from "../../utils/backend-api/API-endpoints/movie.GET";
import { MOVIE_STATUS_SET } from "../../utils/backend-api/API-endpoints/movie.PATCH";
import MovieCardComponent from "../movie-card/movie-card.component";
import MovieDecision from "../movie-decision/movie-decision.component";
import { MoviePanelWrapper } from "./movie-panel.styles";

const MoviePanel = ({
  movie,
  handleDecision,
  handleTouchStart,
  handleTouchEnd,
}: {
  movie: Movie;
  handleDecision: (decision: MOVIE_STATUS_SET) => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchEnd: (e: React.TouchEvent) => void;
}) => (
  <MoviePanelWrapper
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
  >
    <MovieCardComponent movie={movie} />
    <MovieDecision onDecision={(decision) => handleDecision(decision)} />
  </MoviePanelWrapper>
);

export default MoviePanel;
