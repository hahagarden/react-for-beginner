import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";

function Detail() {
  const [info, setInfo] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setInfo(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(info);
  return (
    <div>
      <h2>Detail</h2>
      <Info id={info.id} title={info.title} coverImg={info.large_cover_image} />
    </div>
  );
}

export default Detail;
