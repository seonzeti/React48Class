import React from "react";
import ProductItem from "./ProductItem";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ProductList = ({ list, setList }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/bestList.json")
      .then((res) => setList(res.data.list));
  }, []);
  return (
    <div className="list-container">
      {list.map((item, idx) => (
        <ProductItem key={item.no} item={item} idx={idx} />
      ))}
    </div>
  );
};

export default ProductList;
