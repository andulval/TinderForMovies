import { FC, useState } from "react";
import { Movie as TMovie } from "../../utils/backend-api/API-endpoints/movie.GET";
import Rating from "../rating/rating.component";
import {
  MovieCardContainer,
  MovieCardImage,
  MovieCardSummary,
  MovieCardTitle,
} from "./movie-card.styles";

type MovieCardComponentProps = {
  movie: TMovie;
};

const MovieCardComponent: FC<MovieCardComponentProps> = ({
  movie,
}: MovieCardComponentProps) => {
  const { title, summary, rating, imageURL } = movie;

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  const handleImageError = () => {
    setImageError(true); // Set error state if image fails to load
  };
  return (
    <MovieCardContainer>
      <MovieCardContainer>
        <MovieCardTitle>{title}</MovieCardTitle>
        <Rating rating={rating} />
        <MovieCardSummary>{summary}</MovieCardSummary>

        <MovieCardImage
          src={imageError ? "/assets/no-image.png" : imageURL} // Fallback to no-image.svg
          alt={title}
          onLoad={handleImageLoad} // Trigger when image is fully loaded
          onError={handleImageError} // Trigger when image fails to load
          $isLoaded={isLoaded} // Pass isLoaded as a styled-component custom prop (prefixed with `$`)
          style={{ objectFit: imageError ? "contain" : "cover" }}
        />
      </MovieCardContainer>
    </MovieCardContainer>
  );
};

export default MovieCardComponent;
