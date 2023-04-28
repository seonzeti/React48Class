import React, { useState } from "react";
import "../style/ex04.css";
import { Button } from "react-bootstrap";
import Board from "../components/Board";

const Ex04 = () => {
  // 간단하게 화면 구성 하는 방법 => React Bootstrap 사용하기
  //   npm install react-bootstrap bootstrap

  /* 주사위 게임을 해보자! 
    1. 유저는 '던지기' 버튼을 누른다
    2. 주사위 눈이 랜덤으로 표시된다 (유저의 주사위, 컴퓨터 주사위)
    3. 나와 상대의 주사위 눈을 비교한다
      3-1) 내가 이겼을 경우 : 내 점수 +1 
      3-2) 상대가 이겼을 경우 : 상대점수 + 1
    4. 먼저 5점을 낸 사람 최종 승리! => 출력 
    5. '처음부터' 버튼 클릭 시, 모든 내용을 초기화 한다. 
      - 점수, 이미지경로, 이미지파일번호 등 
        
    */

  // 주사위 숫자
  const [myDice, setMyDice] = useState(1);
  const [comDice, setComDice] = useState(1);

  // 이미지 경로
  let imgPath = "/img/dice";
  const [myPath, setMyPath] = useState(imgPath + "1.png");
  const [comPath, setComPath] = useState(imgPath + "1.png");

  // 현재 점수
  const [myScore, setMyScore] = useState(0);
  const [comScore, setComScore] = useState(0);

  const makeRandom = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  /* 주사위 던지는 함수 */
  const throwDice = () => {
    setMyDice(makeRandom());
    setComDice(makeRandom());

    console.log("dice :", myDice, comDice);

    setMyPath(imgPath + myDice + ".png");
    setComPath(imgPath + comDice + ".png");

    if (myScore < 4 && comScore < 4) {
      /* 판정 */
      if (myDice > comDice) {
        // 승리
        setMyScore(myScore + 1);
      } else if (myDice < comDice) {
        // 패배
        setComScore(comScore + 1);
      }
    } else {
      let result = myScore > comScore ? "승리" : "패배";
      alert("게임이 종료되었습니다. 당신의 " + result + "입니다.");
      makeReset();
    }
  };

  const makeReset = () => {
    setMyScore(0);
    setComScore(0);
    setMyDice(1);
    setComDice(1);
    setMyPath(imgPath + "1.png");
    setComPath(imgPath + "1.png");
  };

  return (
    <div className="box">
      <h1>주사위게임</h1>
      <div>
        <Button variant="secondary" onClick={throwDice}>
          던지기!
        </Button>{" "}
        <Button variant="danger" onClick={makeReset}>
          RESET
        </Button>
      </div>
      <div className="board-container">
        <Board name="나" imgPath={myPath} score={myScore} />
        <Board name="컴퓨터" imgPath={comPath} score={comScore} />
      </div>
    </div>
  );
};

export default Ex04;

/* 
  초기 화면 구성 :
      <div className="box">
      <h1>주사위게임</h1>
      <div>
        <Button variant="secondary">던지기!</Button>{" "}
        <Button variant="danger">RESET</Button>
      </div>
      <div className="board-container">
        <Board />
        <Board />
      </div>
    </div>

*/
