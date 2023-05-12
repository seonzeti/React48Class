import React, { useEffect, useState } from "react";
import axios from "axios";

const Ex18 = () => {
  // 화면에 영화 순위를 띄워보자!
  // 랭킹 - 영화제목 - 개봉일자
  // React JSX 특징 <table>를 <thead><tbody>없이 사용 불가
  // <table>
  //  <tbody>
  // <tr>td*3</tr>
  //  </tbody>
  // </table>

  const [movieList, setMovieList] = useState([]);

  let today = new Date();

  useEffect(() => {
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230501`;

    // Case 1) Fetch API

    /*
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setMovieList(res.boxOfficeResult.dailyBoxOfficeList);
      })
      .catch(() => {
        console.log("failed");
      });

      */

    //   Case2) Axios를 이용해서 API 가져오기

    /*  Axios 
      1) npm i axios 
      2) import axios from "axios"
      3) axios 방식(url주소)
      .then(()=>{})
      .catch(()=>{})      

    */

    axios
      .get(url)
      .then((res) => {
        setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
      })
      .catch(() => {
        console.log("failed");
      });
  });

  return (
    <div>
      <h1>영화 순위!</h1>
      <table border="1px">
        <tbody>
          {movieList.map((item) => (
            <tr key={item.rnum}>
              <td>{item.rank}</td>
              <td>{item.movieNm}</td>
              <td>{item.openDt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ex18;
