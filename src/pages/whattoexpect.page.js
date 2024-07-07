import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import EditButton from "../components/editBtn.component";

const WhatToExpect = () => {
  const siteContent = useSelector((state) => state.siteContent);
  const currentUser = useSelector((state) => state.currentUser);

  const whatToExpectData = siteContent.find(
    (content) => content.id === "whattoexpect"
  );
  return (
    <div id="whatToExpectPage">
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
          {whatToExpectData.titlebox.title}
        </motion.h1>
        <EditButton
          page="whattoexpect"
          section="titlebox"
          field="title"
          content={whatToExpectData.titlebox.title}
        />
      </motion.div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <div
            className={`position-relative mt-xl-0 mt-4 ${
              currentUser && "admin-hover-box"
            }`}
          >
            <p
              dangerouslySetInnerHTML={{ __html: whatToExpectData.s1.content }}
            />
            <EditButton
              page="whattoexpect"
              section="s1"
              field="content"
              content={whatToExpectData.s1.content}
              isEditor={true}
            />
          </div>
          <br />
          <div
            className={`position-relative ${currentUser && "admin-hover-box"}`}
          >
            <h2>{whatToExpectData.s2.title}</h2>
            <EditButton
              page="whattoexpect"
              section="s2"
              field="title"
              content={whatToExpectData.s2.title}
            />
          </div>
          <hr />
          <div
            className={`position-relative mt-xl-0 mt-4 ${
              currentUser && "admin-hover-box"
            }`}
          >
            <p
              dangerouslySetInnerHTML={{ __html: whatToExpectData.s2.content }}
            />
            <EditButton
              page="whattoexpect"
              section="s2"
              field="content"
              content={whatToExpectData.s2.content}
              isEditor={true}
            />
          </div>
          <br />
          <div
            className={`position-relative ${currentUser && "admin-hover-box"}`}
          >
            <h2>{whatToExpectData.s3.title}</h2>
            <EditButton
              page="whattoexpect"
              section="s3"
              field="title"
              content={whatToExpectData.s3.title}
            />
          </div>
          <hr />
          <div
            className={`position-relative mt-xl-0 mt-4 ${
              currentUser && "admin-hover-box"
            }`}
          >
            <p
              dangerouslySetInnerHTML={{ __html: whatToExpectData.s3.content }}
            />
            <EditButton
              page="whattoexpect"
              section="s3"
              field="content"
              content={whatToExpectData.s3.content}
              isEditor={true}
            />
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
                    duration: 0.5,
                    delay: 0.4,
                  },
                }}
                viewport={{ once: true }}
              >
                {whatToExpectData.footer.content}
              </motion.p>
              <EditButton
                page="whattoexpect"
                section="footer"
                field="content"
                content={whatToExpectData.footer.content}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.6,
                },
              }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <button className="btn btn-primary">Let's get started!</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatToExpect;
