import React from "react";

const Ex10SubItem = ({ title, changeData }) => {
  return (
    <>
      {title && <p>1-2. 하위 컴포넌트에서 입력 받은 값은 {title} 입니다.</p>}
      <p>
        2-1. 하위에서 입력 : <input type="text" onChange={changeData} />
      </p>
    </>
  );
};

export default Ex10SubItem;
