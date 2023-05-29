import React, { useEffect, useState } from "react";

const Ex17 = () => {
  const [myDice, setMyDice] = useState(1);
  const [comDice, setComDice] = useState(1);
  const [result, setResult] = useState("게임 전..");

  const makeRandom = () => {
    return parseInt(Math.random() * 6 + 1);
  };

  const throwDice = () => {
    setComDice(makeRandom());
    setMyDice(makeRandom());

    if (myDice > comDice) {
      setResult("승리!!");
    } else if (myDice < comDice) {
      setResult("패배...");
    } else {
      setResult("동점~");
    }
  };

  useEffect(() => {}, [myDice]);

  return (
    <div>
      <h1>주사위게임</h1>
      <h3>컴퓨터 : {comDice}</h3>
      <h3>유저 : {myDice}</h3>
      <h3>{result}</h3>
      <button onClick={throwDice}>던지기</button>
    </div>
  );
};

export default Ex17;

/* 

import React, { useEffect, useState } from "react";

const Ex17 = () => {
  const [myDice, setMyDice] = useState(1);
  const [comDice, setComDice] = useState(1);
  const [result, setResult] = useState("게임 전..");

  const makeRandom = () => {
    return parseInt(Math.random() * 6 + 1);
  };

  const throwDice = () => {
    setComDice(makeRandom());
    setMyDice(makeRandom());
  };

  useEffect(() => {}, [myDice]);

  return (
    <div>
      <h1>주사위게임</h1>
      <h3>컴퓨터 : {comDice}</h3>
      <h3>유저 : {myDice}</h3>
      <h3>{result}</h3>
      <button onClick={throwDice}>던지기</button>
    </div>
  );
};

export default Ex17;

*/
