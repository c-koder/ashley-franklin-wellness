import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/solid";

import { LogoImg, LogoDarkImg } from "../utils/images";

import useIsDesktop from "../hooks/useIsDesktop";

import { routes } from "../pages/routes";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const useDesktop = useIsDesktop();

  useEffect(() => {
    let size = window.innerWidth;
    let navLinks = document.querySelectorAll(".nav-link");

    const updateWindowDimensions = () => {
      size = window.innerWidth;
    };

    window.addEventListener("resize", () => {
      updateWindowDimensions();
      if (size > 1200) {
        navLinks.forEach((link) => {
          link.removeAttribute("data-bs-toggle");
          link.removeAttribute("data-bs-target");
        });
      } else {
        navLinks.forEach((link) => {
          link.setAttribute("data-bs-toggle", "collapse");
          link.setAttribute("data-bs-target", "#navBar");
        });
      }
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const url = new URL(e.target.href);
    navigate(url.pathname);
  };

  return (
    <nav className="navbar navbar-expand-xl fixed-top">
      <div className="container">
        <Link className="navbar-brand abs me-5 mb-2" to="/">
          <img
            src={
              useDesktop && location.pathname === "/" ? LogoImg : LogoDarkImg
            }
            width="200px"
            alt="brand-logo"
          />
        </Link>
        <button
          className="navbar-toggler btn btn-secondary btn-toggle ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBar"
        >
          <Bars3Icon />
        </button>
        <div
          className="navbar-collapse collapse text-center text-xl-start"
          id="navBar"
        >
          <ul className="navbar-nav gap-xl-3">
            {routes.map((route) => (
              <li className="nav-item" key={route.path}>
                <a
                  className={`nav-link ${
                    location.pathname !== "/" && "link-dark"
                  }`}
                  href={route.path}
                  onClick={handleClick}
                >
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="tel:+17744760487">
                <button className="btn btn-primary">
                  <PhoneIcon />
                  774-476-0487
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
