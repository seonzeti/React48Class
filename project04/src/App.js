import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import MyPage from "./components/MyPage";
import NotFound from "./components/NotFound";
import Product from "./components/Product";

function App() {
  /* 
  1. react router 설치 
  npm i react-router-dom 
  
  2. index.js 로 이동해서 App을 BrowswerRouter로 감싸기 -- 필수! 

  3. Routes - Route
  - Routes : 여러 Route (경로) 들을 감싸서 그 중 조건에 맞는 라우트 하나만 렌더링해준다 
            과거에는 Switch라는 이름의 문법을 사용했다. 
  - Route : 여러 경로 
          ex) 요청 => Routes : 무슨 요청인데? 
              Main Page! => <Main/>
              About Page => <About/>
              My Page => <MyPage/>

  
  */
  return (
    <div className="container">
      <h1>☘Welcome to React Router!☘</h1>

      {/* Route 필수 속성 2가지 :
            path(경로) : 사용자가 이렇게 요청했을 때
            element(컴포넌트): 어떤 컴포넌트를 보여줄 것인가?  */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/product/:num" element={<Product />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
