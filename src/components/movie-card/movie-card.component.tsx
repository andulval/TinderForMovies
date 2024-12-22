import { FC } from "react";
import { Movie as TMovie } from "../../utils/backend-api/API-endpoints/movie.GET";
import Rating from "../rating/rating.component";
import { MovieCardContainer } from "./movie-card.styles";

type MovieCardComponentProps = {
  movie: TMovie;
};

const MovieCardComponent: FC<MovieCardComponentProps> = ({
  movie,
}: MovieCardComponentProps) => {
  const { title, summary, rating, imageURL } = movie;

  return (
    <MovieCardContainer>
      <h3>{title}</h3>
      <Rating rating={rating} />
      <summary>{summary}</summary>
      <img src={imageURL} alt="" />
    </MovieCardContainer>
  );
};

export default MovieCardComponent;
