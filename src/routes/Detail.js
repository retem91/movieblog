import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    console.log(json.data);
    console.log(json.data.movie);
    setMovie(json.data.movie);

    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <h1>{movie.title_long}</h1>
      <img src={movie.medium_cover_image} width="400em" />
      <p>{movie.description_full}</p>
    </div>
  );
}

export default Detail;
