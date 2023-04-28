import React from "react";

const Member = ({ teamName, memberName }) => {
  const boxStyle = {
    backgroundColor: "whitesmoke",
    border: "1px solid navy",
    textAlign: "center",
    marginTop: "10px",
    borderRadius: "10px",
  };

  return (
    <>
      <div style={boxStyle}>
        {teamName}
        &nbsp;
        {memberName}
      </div>
    </>
  );
};

export default Member;
