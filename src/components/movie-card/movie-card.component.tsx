import { FC } from "react";
import { Movie as TMovie } from "../../utils/backend-api/API-endpoints/movie.GET";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Rating from "../rating/rating.component";
import { ActionButtons, MovieCardContainer } from "./movie-card.styles";

type MovieCardComponentProps = {
  movie: TMovie;
  acceptHandler: () => void;
  rejectHandler: () => void;
};

const MovieCardComponent: FC<MovieCardComponentProps> = ({
  movie,
  acceptHandler,
  rejectHandler,
}: MovieCardComponentProps) => {
  const { title, summary, rating, imageURL } = movie;

  return (
    <MovieCardContainer>
      <h3>{title}</h3>
      <Rating rating={rating} />
      <summary>{summary}</summary>
      <img src={imageURL} alt="" />
      <ActionButtons>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.accept}
          onClick={acceptHandler}
        ></Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.reject}
          onClick={rejectHandler}
        ></Button>
      </ActionButtons>
    </MovieCardContainer>
  );
};

export default MovieCardComponent;
