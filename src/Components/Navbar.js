import React from "react";
import LandingPage from "./Landing-page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostView from "./PostView/PostView";
import FormPage from "./FormPage/FormPage";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/postView" element={<PostView />} />
          <Route path="/formPage" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
