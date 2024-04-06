import { useEffect } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";

import { routes } from "./routes";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
