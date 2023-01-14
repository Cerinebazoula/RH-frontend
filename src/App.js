import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} exact />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
