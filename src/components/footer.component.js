import { Facebook, Instagram } from "react-feather";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <section className="container d-flex justify-content-center justify-content-lg-between">
        <p className="d-none d-lg-block">© 2024 Ashley Franklin Wellness</p>
        <div>
          <a href="/" className="me-4 text-reset">
            <Facebook />
          </a>
          <a href="/" className="me-4 text-reset">
            <Instagram />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
