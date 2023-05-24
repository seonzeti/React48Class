import React, { useEffect, useState } from "react";

const Ex17B = () => {
  const [mbti, setMbti] = useState("");
  useEffect(() => {
    console.log("mbti:", mbti);
  });
  return (
    <div>
      <p>당신의 mbti는 무엇인가요?</p>
      <select
        onChange={(e) => {
          setMbti(mbti + e.target.value);
        }}
      >
        <option></option>
        <option>E</option>
        <option>I</option>
      </select>
      <select
        onChange={(e) => {
          setMbti(mbti + e.target.value);
        }}
      >
        <option></option>
        <option>N</option>
        <option>S</option>
      </select>
      <select
        onChange={(e) => {
          setMbti(mbti + e.target.value);
        }}
      >
        <option></option>
        <option>T</option>
        <option>F</option>
      </select>
      <select
        onChange={(e) => {
          setMbti(mbti + e.target.value);
        }}
      >
        <option></option>
        <option>P</option>
        <option>J</option>
      </select>

      <button>제출</button>
      <p>{mbti}</p>
    </div>
  );
};

export default Ex17B;
