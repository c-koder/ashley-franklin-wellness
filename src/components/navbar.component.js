import { Link } from "react-router-dom";

import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/solid";

import { LogoImg, LogoDarkImg } from "../utils/images";

import useIsDesktop from "../hooks/useIsDesktop";

const Navbar = () => {
  const useDesktop = useIsDesktop();

  return (
    <nav className="navbar navbar-expand-xl fixed-top">
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
              <Link
                className="nav-link"
                to="/specialties"
                data-bs-toggle="collapse"
              >
                Specialties
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/what-to-expect"
                data-bs-toggle="collapse"
              >
                What To Expect
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                data-bs-toggle="collapse"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq" data-bs-toggle="collapse">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/contact">
                <button className="btn btn-primary">
                  <PhoneIcon />
                  774-476-0487
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
