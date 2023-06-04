import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = ({ list }) => {
  let { num } = useParams();
  console.log("ProductDetail : ", list[num]);

  return (
    <div className="list-container">
      <div className="detail-item">
        <h3>{list[num].title}</h3>
        <p>
          <span>가격 : {list[num].price}원</span>
          {"  "}
          {list[num].delivery ? (
            <span>배송비 무료!</span>
          ) : (
            <span>배송비 : {list[num].delivery}원</span>
          )}
        </p>
        <img src={list[num].src} width="200px"></img>
        <Link to="/list" style={{ textDecoration: "none", color: "black" }}>
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
