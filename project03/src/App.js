import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Ex01 from "./example/Ex01";
import Ex02 from "./example/Ex02";
import Ex03 from "./example/Ex03";
import Ex04 from "./example/Ex04";
import Ex05 from "./example/Ex05";
import Ex06 from "./example/Ex06";

function App() {
  return (
    <div className="container">
      {/* 01. useState 개념 + React Event 개념 */}
      {/* <Ex01 /> */}

      {/* 02. useState 좋아요 예제 */}
      {/* <Ex02 /> */}

      {/* 03. useState 실습 */}
      {/* <Ex03 /> */}

      {/* 04. Mini Game - 주사위 게임을 해보자! */}
      {/* <Ex04 /> */}

      {/* 05. Map함수*/}
      {/* <Ex05 /> */}

      {/* 06. Map 함수 예제 */}
      <Ex06 />
    </div>
  );
}

export default App;
