import React, { useRef, useState } from "react";

const Ex20 = () => {
  // https://t1.daumcdn.net/cfile/tistory/9919253E5A9B952D1F

  const imgRef = useRef();
  const textRef = useRef();
  const changePic = () => {
    textRef.current.value == "수지" &&
      (imgRef.current.src =
        "https://t1.daumcdn.net/cfile/tistory/9919253E5A9B952D1F");

    textRef.current.value = "";
    textRef.current.focus();
  };
  return (
    <div>
      <span>희망하는 사진이 있으신가요?</span>
      <br />
      <input type="text" ref={textRef}></input>
      <button onClick={changePic}>사진변경!</button>
      <div>
        <img
          width="300px"
          ref={imgRef}
          src="https://image.xportsnews.com/contents/images/upload/article/2022/0217/mb_1645066102431456.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Ex20;
