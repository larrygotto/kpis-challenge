import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import NotFound from "../pages/not-found/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;