import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Product = () => {
  /* 
    ** useParam() 
    url의 파라미터 정보를 가져올 수 있다 - 물품의 고유한 ID값을 설정하는데 적합하다.

    a. <Route path='/페이지이름:파라미터정보'>
    b. 컴포넌트 => 
         let {파라미터정보} = useParams()

    한가지 정보만 사용 가능
    예) 많은 상품의 상세 페이지  */
  let { num } = useParams();
  console.log("게시물 번호 : ", num);

  /*
   ** useSearchParams()

    url의 쿼리 값을 가져와서 사용 
    여러 값을 사용 가능
    예 ) 검색기능, 필터링 기능

   */

  const [query, setQuery] = useSearchParams();
  console.log("게시글은 : ", query.get("popular"));

  /* useParams vs useSearchParams
  
  - useParams는 하나밖에 사용할 수 없다. 즉 그 컴포넌트가 가지고 있는 고유한 성질을 담는데에 유용함 
    ex) 상품 고유 번호, 회원 고유 번호 등 
  - useSearchParams는 쿼리에만 입력할 수 있다면 여러개도 사용이 가능하다 
    검색 필터, 상품의 상태, 게시물의 상태 등을 입력하는데 유용하다.
    ex) 인기글, 품절상태, 등등 
  */

  return (
    <div>
      {num}번째 게시물, {query.get("popular")}게시글입니다.
    </div>
  );
};

export default Product;
