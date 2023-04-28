import React from "react";

const MenuItem = ({ name, price }) => {
  // Case 1) 매개변수 props => props.name
  // Case 2) 객체 안의 속성 => {name}

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default MenuItem;
