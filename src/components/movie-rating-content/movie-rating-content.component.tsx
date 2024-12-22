import Spinner from "../spinner/spinner.component";
import { Movie } from "../../utils/backend-api/API-endpoints/movie.GET";

type MovieRatingContentProps = {
  loading: boolean;
  moviesLength: number;
  allRated: boolean;
  currentMovie: Movie | null;
};

const MovieRatingContent = ({
  loading,
  moviesLength,
  allRated,
  currentMovie,
}: MovieRatingContentProps) => {
  if (loading && moviesLength === 0) {
    return <Spinner />;
  }

  if (allRated) {
    return <p>You have rated all the movies! Thank you for your feedback.</p>;
  }

  if (!currentMovie) {
    return <p>No more movies available.</p>;
  }

  // Return `null` when all conditions are satisfied and the parent handles rendering the main content.
  return null;
};

export default MovieRatingContent;
