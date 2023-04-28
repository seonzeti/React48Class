import React from "react";

const Ex05 = () => {
  let students = [
    { name: "홍길동", age: 30, bloodType: "A" },
    { name: "고길동", age: 50, bloodType: "AB" },
    { name: "둘리", age: 10, bloodType: "A" },
  ];
  return (
    <div>
      <h3>Case 1 : 객체의 값을 하나하나 출력</h3>
      <p>
        안녕하세요 제 이름은 {students[0].name}입니다. 저는{" "}
        {students[0].bloodType}형이고, {students[0].age}살입니다.
      </p>
      <p>
        안녕하세요 제 이름은 {students[1].name}입니다. 저는{" "}
        {students[1].bloodType}형이고, {students[1].age}살입니다.
      </p>
      <p>
        안녕하세요 제 이름은 {students[2].name}입니다. 저는{" "}
        {students[2].bloodType}형이고, {students[2].age}살입니다.
      </p>

      <h3>Case 2 : Map 함수를 이용 </h3>
      {/*
      - 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
      - 기존의 배열은 영향을 받지 않는다.
      - key 값을 꼭 작성해야한다. 
        이 때, key 값은 중복되면 안된다.
      */}

      {students.map((item) => (
        <p key={item.name}>
          안녕하세요 제 이름은 {item.name}입니다. 저는 {item.bloodType}형이고,{" "}
          {item.age}살 입니다.
        </p>
      ))}
    </div>
  );
};

export default Ex05;
