import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./login";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
