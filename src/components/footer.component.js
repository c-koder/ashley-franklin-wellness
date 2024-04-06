import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-center">
      <section className="container d-flex justify-content-center">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
            },
          }}
        >
          © {new Date().getFullYear()} Ashley Franklin Wellness
        </motion.p>
      </section>
    </footer>
  );
};

export default Footer;
