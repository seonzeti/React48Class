import "./App.css";
import { useEffect, useState } from "react";
import axios from "./api";

function App() {
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const getData = () => {
    axios
      .get("/movie/now_playing?language=en-US&page=1")
      .then((response) => {
        console.log(response.data.results[0].title);
        setNowPlayingList(response.data.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(function () {
    getData();
  }, []);

  return (
    <h1>
      <h1>현재 상영작</h1>
      {nowPlayingList.map((item) => (
        <p>item.title</p>
      ))}
    </h1>
  );
}

export default App;
