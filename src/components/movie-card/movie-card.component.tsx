import { Movie as TMovie } from "../../utils/backend-api/API-endpoints/fetchMovie";

type MovieCardComponentProps = {
  movie: TMovie;
};

const MovieCardComponent = ({ movie }: MovieCardComponentProps) => {
  const { title, summary, rating, imageURL } = movie;
  return (
    <div>
      <span>{rating}</span>
      <h3>{title}</h3>
      <summary>{summary}</summary>
      <img src={imageURL} alt="" />
    </div>
  );
};

export default MovieCardComponent;
