import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <p>Main Page</p>
      {/* 

        ** Link 태그
        - 웹 페이지에서는 원래 링크를 보여줄 때 a태그를 사용한다. 하지만 a태그는 클릭시 페이지를 새로 불러오기때문에 사용하지 않는다.
        - Link 컴포넌트를 사용하는데, 생김새는 a태그를 사용하지만, History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있다.

        (1) import 
        import { Link } from "react-router-dom";

        (2) <Link to="경로">링크명</Link>
      
      */}
      <Link to="/about">About</Link>
      <hr />
      <Link to="https://www.naver.com">네이버로 이동</Link>
    </div>
  );
};

export default Main;
