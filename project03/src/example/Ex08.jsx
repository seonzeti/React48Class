import { useRef, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "../style/ex08.css";

function Ex08() {
  // useRef : 특정 DOM을 선택하고 싶을 때
  //   ** JS => getElementById, querySelector 를 사용해서 특정 DOM에 접근했다
  // React에서도 특정 DOM에 직접 접근해야할 일이 발생함
  //     ex) 클릭 시, 사이즈 변경 등

  const divRef = useRef();

  const changeSize = (size) => {
    divRef.current.style.width = `${size}px`;
    divRef.current.style.height = `${size}px`;
  };

  const ckBtn = (e) => {
    console.log("ck", e.target.innerText);
    if (e.target.innerText == "작게") {
      changeSize(100);
    } else if (e.target.innerText == "원본") {
      changeSize(200);
    } else {
      changeSize(300);
    }
  };

  return (
    <div className="container">
      <ButtonGroup>
        <Button onClick={ckBtn}>작게</Button>
        <Button onClick={ckBtn}>원본</Button>
        <Button onClick={ckBtn}>크게</Button>
      </ButtonGroup>

      <div className="square" ref={divRef}></div>
    </div>
  );
}

export default Ex08;
