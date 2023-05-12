import React, { useState } from "react";

import ColorList from "../components/Ex11/ColorList";
import ColorResult from "../components/Ex11/ColorResult";
import { ColorContext } from "../context/Ex11ColorContext.js";
const Ex11 = () => {
  // Context란? 리액트 컴포넌트 간에 값을 전역적으로 공유할 수 있게 하는 기능

  // Q. Props 로만 데이터를 전달했을 때 발생할 수 있는 문제는?
  // A. 깊숙히 위치한 컴포넌트에 데이터를 전달해야할 경우
  // => 여러 컴포넌트를 연달아서 Props 설정 => 불편하고 실수가 잦음
  // ==> 이런 것을 Props Drilling 이라고 부른다

  // 그래서 Context로 상태를 전역적으로 관리한다.

  // 만드는 순서
  // 1. context를 만들어준다 (context 폴더 -> XXContext.js)
  //    - createContext import 해오기
  //    - export 해주기

  // 2. context를 사용할 곳에 context import 해주기

  // 3. context provider로 감싸주기
  //  provider 는 value를 받음 => value 안에 우리가 전달하고자 하는 데이터

  // 4. 하위 컴포넌트에서 useContext 받아오기 --> useContext
  const [choiceColor, setChoiceColor] = useState("hello");

  let containerStyle = {
    margin: "2%",
  };
  return (
    <ColorContext.Provider value={{ setChoiceColor, choiceColor }}>
      <div style={containerStyle}>
        <h1>색상 변경하기</h1>
        <ColorList />
        <br />
        <hr></hr>
        <br />
        <h1>선택한 색상</h1>
        <ColorResult />
      </div>
    </ColorContext.Provider>
  );
};

export default Ex11;
