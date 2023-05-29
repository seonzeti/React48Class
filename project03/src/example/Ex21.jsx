import React, { useEffect } from "react";
import { useState } from "react";

const Ex21 = () => {
  let pos = ["좌", "정면", "우"];
  const [comChoice, setComChoice] = useState("");
  const [myChoice, setMyChoice] = useState("");
  const [result, setResult] = useState("");

  const posRandom = (e) => {
    let ranNum = parseInt(Math.random() * 3);
    setComChoice(pos[ranNum]);

    console.log(e.target.innerText);
    setMyChoice(e.target.innerText);
  };
  useEffect(() => {
    comChoice == myChoice ? setResult("승리") : setResult("패배");
  }, [myChoice]);

  return (
    <div>
      <h1>참참참</h1>
      <p>선택 : {myChoice}</p>
      <p>고개 : {comChoice}</p>
      {comChoice && <p>결과 : {result}</p>}
      {pos.map((item) => (
        <button onClick={posRandom} key={item}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Ex21;
