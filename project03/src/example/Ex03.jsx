import React, { useState } from "react";

const Ex03 = () => {
  const [ranNum, setRanNum] = useState(0);
  const [inputNum, setInputNum] = useState(0);

  const btnCk = (event) => {
    console.log(parseInt(event.target.innerText));
    setInputNum(parseInt(event.target.innerText));
    setRanNum(parseInt(Math.random() * 3 + 1));
  };

  // 1. 랜덤한 수를 뽑아준다.
  // 범위는 1~3
  // 2. 누른 버튼의 숫자를 랜덤한 수와 비교
  // 3. 만약, 랜덤한 수와 누른 버튼의 수가 같다면
  //      정답입니다!
  //      다르다면, '땡!' 을 출력할 것
  return (
    <div>
      <div>
        <button onClick={btnCk}>1</button>
        <button onClick={btnCk}>2</button>
        <button onClick={btnCk}>3</button>
      </div>

      <div>
        내가 입력한 숫자 : {inputNum}
        <br />
        랜덤한 숫자 : {ranNum}
        <br />
        {inputNum === ranNum ? <p>정답입니다!</p> : <p>땡!</p>}
      </div>
    </div>
  );
};

export default Ex03;
