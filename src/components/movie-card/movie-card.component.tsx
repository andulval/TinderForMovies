import { Movie as TMovie } from "../../utils/backend-api/API-endpoints/fetchMovie";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Rating from "../rating/rating.component";
import { ActionButtons, MovieCardContainer } from "./movie-card.styles";

type MovieCardComponentProps = {
  movie: TMovie;
};

const MovieCardComponent = ({ movie }: MovieCardComponentProps) => {
  const { title, summary, rating, imageURL } = movie;
  return (
    <MovieCardContainer>
      <Rating rating={rating} />
      <h3>{title}</h3>
      <summary>{summary}</summary>
      <img src={imageURL} alt="" />
      <ActionButtons>
        <Button
          isLoading={false}
          buttonType={BUTTON_TYPE_CLASSES.accept}
        ></Button>
        <Button
          isLoading={false}
          buttonType={BUTTON_TYPE_CLASSES.reject}
        ></Button>
      </ActionButtons>
    </MovieCardContainer>
  );
};

export default MovieCardComponent;
