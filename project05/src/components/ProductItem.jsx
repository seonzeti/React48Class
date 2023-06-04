import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item, idx }) => {
  let nav = useNavigate();
  return (
    <div
      className="product-container"
      onClick={() => {
        nav(`/detail/${idx}`);
      }}
    >
      <img src={item.src} width="100px"></img>
      <p>{item.title}</p>
      <p>{item.price}원</p>
    </div>
  );
};

export default ProductItem;
