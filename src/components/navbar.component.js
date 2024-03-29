import { Link } from "react-router-dom";

import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/solid";

import { LogoImg, LogoDarkImg } from "../utils/images";

import useIsDesktop from "../hooks/useIsDesktop";

const Navbar = () => {
  const useDesktop = useIsDesktop();

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand abs me-5 mb-2" to="/">
          <img
            src={useDesktop ? LogoImg : LogoDarkImg}
            width="200px"
            alt="brand-logo"
          />
        </Link>
        <button
          className="navbar-toggler btn btn-secondary btn-toggle ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar"
        >
          <Bars3Icon />
        </button>
        <div
          className="navbar-collapse collapse text-center text-lg-start"
          id="collapseNavbar"
        >
          <ul className="navbar-nav gap-lg-3">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specialties">
                Specialties
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/what-to-expect">
                What To Expect
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
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
