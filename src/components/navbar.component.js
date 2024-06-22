import { useEffect } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import { signOut } from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";

import { Bars3Icon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";

import { LogoImg, LogoDarkImg } from "../utils/images";

import useIsDesktop from "../hooks/useIsDesktop";

import { routes } from "../pages/routes";
import { auth } from "../config/fb";

import { setCurrentUser } from "../store/actions";

const AdminBtn = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(setCurrentUser(null));
  };

  return currentUser !== null ? (
    <div className="dropdown">
      <button
        className="btn btn-admin"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <UserIcon />
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <Link className="dropdown-item" to="/settings">
            Site Settings
          </Link>
        </li>
        <li>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  ) : null;
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const useDesktop = useIsDesktop();

  const siteSettings = useSelector((state) => state.siteSettings);

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
    <motion.nav
      initial={{ opacity: 0.5 }}
      whileInView={{
        opacity: 1,
        transition: {
          opacity: { type: "spring", stiffness: 100 },
          duration: 0.8,
          delay: 0.1,
        },
      }}
      viewport={{ once: true }}
      className="navbar navbar-expand-xl fixed-top"
    >
      <div className="container">
        <Link className="navbar-brand abs me-5 mb-2" to="/">
          <motion.img
            initial={{ opacity: 0, y: -3 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                opacity: { type: "spring", stiffness: 100 },
                y: { type: "spring", stiffness: 100 },
                duration: 0.8,
                delay: 0.1,
              },
            }}
            viewport={{ once: true }}
            src={
              useDesktop && location.pathname === "/" ? LogoImg : LogoDarkImg
            }
            width="200px"
            alt="brand-logo"
          />
        </Link>

        <div className="d-flex ms-auto gap-2">
          <div className="d-block d-xl-none">
            <AdminBtn />
          </div>
          <button
            className="navbar-toggler btn btn-secondary btn-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBar"
          >
            <Bars3Icon />
          </button>
        </div>

        <div
          className="navbar-collapse collapse text-center text-xl-start"
          id="navBar"
        >
          <ul className="navbar-nav gap-xl-3">
            {routes.map(
              (route, index) =>
                index < 8 && (
                  <motion.li
                    initial={{ opacity: 0, y: -2 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.2,
                        delay: 0.1 * index + 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    className="nav-item"
                    key={route.path}
                  >
                    <a
                      className={`nav-link ${
                        location.pathname !== "/" ? "link-dark" : ""
                      }`}
                      href={route.path}
                      onClick={handleClick}
                    >
                      {route.name}
                    </a>
                  </motion.li>
                )
            )}
          </ul>
          <ul className="navbar-nav ms-auto align-items-center">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 1.2,
                },
              }}
              viewport={{ once: true }}
              className="nav-item"
            >
              <a href="tel:+17744760487">
                <button className="btn btn-primary">
                  <PhoneIcon />
                  {siteSettings.contactInfo.phone}
                </button>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 1.4,
                },
              }}
              viewport={{ once: true }}
              className="nav-item ms-3 d-none d-xl-block"
            >
              <AdminBtn delay={1.4} />
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
