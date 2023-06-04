import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";
import Join from "./components/Join";
import Login from "./components/Login";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/list"
          element={<ProductList list={list} setList={setList} />}
        ></Route>
        <Route
          path="/detail/:num"
          element={<ProductDetail list={list} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
