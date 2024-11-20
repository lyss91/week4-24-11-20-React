import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 아이디 root 에 js 내용을 js 실행 결과를 입력한다.
//  index.html 에 있는 <div id="root"></div> 변경금지
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
