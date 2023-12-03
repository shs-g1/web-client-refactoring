import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Management from "./pages/Management";
import Mypage from "./pages/Mypage";
import Client from "./pages/Client";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/management/:id" element={<Management />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/client/:id" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
