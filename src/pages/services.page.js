import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import EditButton from "../components/editBtn.component";

const Services = () => {
  const siteSettings = useSelector((state) => state.siteSettings);
  const siteContent = useSelector((state) => state.siteContent);
  const currentUser = useSelector((state) => state.currentUser);

  const servicesData = siteContent.find((content) => content.id === "services");

  return (
    <div id="servicesPage">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            y: { type: "spring", stiffness: 100 },
            duration: 0.8,
            delay: 0.1,
          },
        }}
        viewport={{ once: true }}
        className={`title-box position-relative ${
          currentUser && "admin-hover-box"
        }`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.45,
              delay: 0.3,
            },
          }}
          viewport={{ once: true }}
        >
          {servicesData.titlebox.title}
        </motion.h1>
        <EditButton
          page="services"
          section="titlebox"
          field="title"
          content={servicesData.titlebox.title}
        />
      </motion.div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <div>
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <h2>{servicesData.s1.title}</h2>
              <EditButton
                page="services"
                section="s1"
                field="title"
                content={servicesData.s1.title}
              />
            </div>
            <hr />
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <p
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: servicesData.s1.content }}
              />

              <EditButton
                page="services"
                section="s1"
                field="content"
                content={servicesData.s1.content}
                isEditor={true}
              />
            </div>
            <p>
              <a href={`tel:+1${siteSettings.contactInfo.phone}`}>
                {siteSettings.contactInfo.phone}
              </a>{" "}
              or <Link to="/contact">Book Online</Link>.
            </p>
          </div>
          <div className="my-5">
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <h2>{servicesData.s2.title}</h2>
              <EditButton
                page="services"
                section="s2"
                field="title"
                content={servicesData.s2.title}
              />
            </div>
            <hr />
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <p
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: servicesData.s2.content }}
              />
              <EditButton
                page="services"
                section="s2"
                field="content"
                content={servicesData.s2.content}
                isEditor={true}
              />
            </div>
            <p>
              <a href={`tel:+1${siteSettings.contactInfo.phone}`}>
                {siteSettings.contactInfo.phone}
              </a>{" "}
              or <Link to="/contact">Book Online</Link>.
            </p>
          </div>
          <div>
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <h2>{servicesData.s3.title}</h2>
              <EditButton
                page="services"
                section="s3"
                field="title"
                content={servicesData.s3.title}
              />
            </div>
            <hr />
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <p
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: servicesData.s3.content }}
              />
              <EditButton
                page="services"
                section="s3"
                field="content"
                content={servicesData.s3.content}
                isEditor={true}
              />
            </div>
            <p>
              <a href={`tel:+1${siteSettings.contactInfo.phone}`}>
                {siteSettings.contactInfo.phone}
              </a>{" "}
              or <Link to="/contact">Book Online</Link>.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cta">
          <div className="container text-center">
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: 0.3,
                  },
                }}
              >
                {servicesData.footer.content}
              </motion.p>
              <EditButton
                page="about"
                section="footer"
                field="content"
                content={servicesData.footer.content}
              />
            </div>
            <div className="d-xl-flex gap-4 justify-content-center mt-4">
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.6,
                  },
                }}
                viewport={{ once: true }}
                href={`tel:+1${siteSettings.contactInfo.phone}`}
                style={{ border: "none" }}
              >
                <button className="btn btn-tertiary">Lets have a call</button>
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.7,
                  },
                }}
                viewport={{ once: true }}
              >
                <Link to="/contact" style={{ border: "none" }}>
                  <button className="btn btn-primary mt-xl-0 mt-3">
                    Or book online
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
