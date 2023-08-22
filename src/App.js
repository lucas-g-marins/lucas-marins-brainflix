import React from "react";
import Header from "./components/Header/Header";
import MainVideo from "./components/Video/MainVideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./Page/Upload";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainVideo />} />
          <Route path="upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
