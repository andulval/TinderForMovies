import { MOVIE_STATUS_SET } from "../../utils/backend-api/API-endpoints/movie.PATCH";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { MovieDecisionWrapper } from "./movie-decision.styles";

type MovieDecisionProps = {
  onDecision: (decision: MOVIE_STATUS_SET) => void;
};

const MovieDecision = ({ onDecision }: MovieDecisionProps) => {
  return (
    <MovieDecisionWrapper>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.accept}
        onClick={() => onDecision(MOVIE_STATUS_SET.accept)}
      ></Button>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.reject}
        onClick={() => onDecision(MOVIE_STATUS_SET.reject)}
      ></Button>
    </MovieDecisionWrapper>
  );
};

export default MovieDecision;
