import { useEffect } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import { ptsVerified2 } from "../utils/images";

import { routes } from "./routes";

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div>
      <a
        href="https://www.psychologytoday.com/profile/1035259"
        className="sx-verified-seal"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ptsVerified2} alt="pts-verified2" />
      </a>
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
