import "./App.css";
import { useEffect, useState } from "react";
import axios from "./api";

function App() {
  const [list, setList] = useState([]);
  /* https://developer.themoviedb.org/docs/image-basics */
  const [imgSrc, setImgSrc] = useState("https://image.tmdb.org/t/p/w200");

  const getData = (type) => {
    console.log("type: " + type);
    axios
      .get(`/movie/${type}?language=en-US&page=1`)
      .then((res) => {
        console.log(res.data.results);
        setList(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  const getPopluar = () => {
    getData("popular");
  };

  useEffect(() => {
    getPopluar();
  }, []);

  return (
    <div className="container">
      <h1>인기작</h1>
      {list.map((item) => (
        <div className="movie-card" key={item.title}>
          <div className="first-section">
            <img src={imgSrc + item.poster_path}></img>
          </div>
          <div className="second-section">
            <h3>{item.title}</h3>
            <p>개봉일자 : {item.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
