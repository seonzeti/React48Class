import React, { useState } from "react";
import Ex10SubItem from "../components/Ex10SubItem";

const Ex10 = () => {
  /* 컴포넌트끼리 값 전달하기  
  Ex10.jsx  -  부모요소 
  Ex10SubItem.jsx  - 자식요소
  */

  const [inputTitle, setInputTitle] = useState("");
  const [rcTitle, setRcTitle] = useState("");

  const changeData = (e) => {
    setRcTitle(e.target.value);
  };

  return (
    <div>
      <h2>컴포넌트끼리 값 전달을 해보자!</h2>
      <p>
        1-1. 상위에서 입력 :{" "}
        {/*
        1) 상위 => 하위 데이터 전송 
        props를 통해 간단하게 데이터를 전달 할 수 있다. */}
        <input
          type="text"
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
      </p>
      <Ex10SubItem title={inputTitle} changeData={changeData} />

      {/* 2. 하위 => 상위 데이터 전송 
      function을 생성하고, 그 function의 매개변수를 이용해서 데이터 전달
      */}
      {rcTitle && <span>2-2. 상위에서 입력받은 값은 {rcTitle}입니다.</span>}
    </div>
  );
};

export default Ex10;
