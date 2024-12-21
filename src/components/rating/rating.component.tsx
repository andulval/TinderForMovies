/// <reference types="vite-plugin-svgr/client" />
import StarIcon from "../../assets/star.svg?react";
import { RatingContainer, Icon } from "./rating.styles";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return (
    <RatingContainer>
      <Icon>
        <StarIcon />
      </Icon>
      {rating}
    </RatingContainer>
  );
};

export default Rating;
