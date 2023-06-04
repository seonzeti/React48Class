import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "./axios";

function App2() {
  const movieSearch = (params) => {
    return axios.get("/v1/search/movie.json", { params });
  };

  useEffect(() => {
    movieSearch();
  }, []);
  return <h1>Naver Search API</h1>;
}

export default App2;
