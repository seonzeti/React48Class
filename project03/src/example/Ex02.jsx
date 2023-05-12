import React, { useState } from "react";
import pic from "../img/img1.gif";
import "../style/ex01.css";
import { useRef } from "react";

const Ex02 = () => {
  /* React 에서 이미지 경로를 설정하는 방법 3가지 

  1. src 폴더에서 이미지를 import 하기 => import 이미지변수 from 경로 
    => <img src={이미지변수}/>

  2. css의 background-image 사용하기 : background-image : url(경로)

  3. public 내 이미지 접근하기
    -> public 내에 img 폴더를 만든 후 이미지 파일을 보관 
    -> 이 때, 별도로 import는 따로 작성하지 않는다. 
      why? public 안에 있는 이미지는 서버와 통신이 간으하다 
    -> url에 http://localhost:3000/img/사진이름.확장자 하면 열림
    -> static 파일들은 public 폴더에 저장 

  */

  // 1. '좋아요' 버튼 클릭 시, 버튼의 내용이 '좋아요 취소'로 변경
  //     '좋아요 취소' 버튼 클릭 시, 버튼의 내용이 '좋아요' 로 변경

  // 2. '좋아요' 버튼 클릭 시, 비어있는 하트가 꽉찬 하트로 변경
  //     '좋아요 취소' 버튼 클릭 시, 꽉찬 하트가 비어있는 하트로 변경

  const [likeTxt, setLikeTxt] = useState("좋아요");
  const [likeEmoji, setLikeEmoji] = useState("♡");
  const [likeNum, setLikeNum] = useState(0);

  const handleLike = () => {
    if (likeEmoji == "♡") {
      setLikeEmoji("♥");
      setLikeNum(1);
    } else {
      setLikeEmoji("♡");
      setLikeNum(0);
    }
  };

  // 완료 시, 꽉찬하트로 좋아요 5개 만들어서 캡쳐 => slack

  return (
    <div className="post">
      {/* 이미지, 좋아요 버튼, +1 버튼, -1버튼 */}
      <img width="300px" src={pic}></img>
      <p className="text">
        <span className="emoji" onClick={handleLike}>
          {likeEmoji}
        </span>
        <span>
          {""} 좋아요 {likeNum}개
        </span>
      </p>
    </div>
  );
};

export default Ex02;
