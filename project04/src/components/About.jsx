import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const About = () => {
  /*
   ** useNavigate
    - 페이지 이동을 도와주는 React hooks
    1. const 변수 = useNavigate() 
    2. 페이지 이동을 해야할 때 변수("경로")
        ex) const nav = useNavigate() 
            nav('/about')
    */

  const nav = useNavigate();
  let auth = false;

  return (
    <div>
      <p>About</p>
      {/* Q. 만약 회원이라면 MyPage로, 비회원이라면 Main으로 다시 이동하기 */}

      <div>
        <button
          onClick={() => {
            auth == true ? nav("/mypage") : nav("/");
          }}
        >
          마이페이지 이동
        </button>
      </div>
      <Link to="/product/1?popluar='true'">
        [1] 캠핑용품 저랑 거래하실 분 있으신가요?
      </Link>
      <br />
      <Link to="/product/2">[2] 정보처리기사 스터디 하실 분?</Link>
      <br />
      <Link to="/product/3">[3] 토익 스터디 구합니다 </Link>
      <br />
    </div>
  );
};

export default About;
