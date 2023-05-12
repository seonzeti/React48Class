import React, { useState } from "react";
import data from "../json/ex06data.json";

const Ex07 = () => {
  /* filter 함수는 배열의 각 요소에 대해서 주어진 함수의 결과값이 true 인 요소들을 모아서
        새로운 배열로 반환하는 함수를 의미한다.
    */

  console.log("data :", data.result[0].birthYear);

  const [newArr, setNewArr] = useState(
    data.result.filter((item) => item.birthYear <= 1994)
  );

  return (
    <div>
      <h1>1994년생과 나이가 같거나, 그보다 나이가 많은 사람들만 출력하시오</h1>

      {newArr.map((item) => (
        <h3 key={item.title}>{item.title}</h3>
      ))}
    </div>
  );
};

export default Ex07;
