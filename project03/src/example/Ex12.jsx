import React, { useState } from "react";
import Footer from "../components/Ex12/Footer";
import Header from "../components/Ex12/Header";
import Content from "../components/Ex12/Content";
import { ThemeContext } from "../context/Ex12ThemeContext";

import "../style/ex12.css";

const Ex12 = () => {
  // 우리 App의 Theme에 관련된 데이터 => 전역적으로 사용해야하는 데이터
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="page">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Ex12;
