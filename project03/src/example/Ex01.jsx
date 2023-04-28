import React from "react";
import { useState } from "react";

const Ex01 = () => {
  const [num2, setNum2] = useState(0);

  const ck = (event) => {
    console.log(event.target.innerText);

    // React Event

    // 1. onClick : camel Case로 작성할 것
    // 2. {함수이름}  : ""대신 JSX 문법인 중괄호 사용
    // 3. 이벤트 안에는 함수 형태의 값을 전달
    //    예) {함수이름} => O
    //        {()=>{}} => O
    // 4. DOM 요소에만 이벤트를 설정 할 수 있다
    //    => 내가 만든 컴포넌트에는 이벤트 설정 X
  };

  let num = 0;
  const increase = () => {
    console.log("숫자 1씩 증가!");

    // 변수로 처리할 때 => console 창은 되지만,
    //                    화면에 렌더링 되지 않는다.
    num = num + 1;
    console.log("현재 num", num);

    // useState로 처리할 때
    setNum2(num2 + 1);
  };

  return (
    <div>
      <div>
        <p>{num2}</p>
        <button onClick={increase}>+1</button>

        {/* <button onClick={ck}>클릭!</button> */}
      </div>
    </div>
  );
};

export default Ex01;
