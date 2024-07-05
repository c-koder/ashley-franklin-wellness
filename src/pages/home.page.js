import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { Parallax } from "react-scroll-parallax";

import { useDispatch, useSelector } from "react-redux";

import { PencilSquareIcon } from "@heroicons/react/24/solid";

import { AsyncImage } from "../components/image.component";

import EditorDialog from "../components/dialogs/editor.dialog";

import EditButton from "../components/editBtn.component";

import { handleFileUpload } from "../utils/functions";

const Home = () => {
  const dispatch = useDispatch();

  const [animated, setAnimated] = useState(false);
  const [ref, inView] = useInView();

  const siteContent = useSelector((state) => state.siteContent);
  const currentUser = useSelector((state) => state.currentUser);

  const homeData = siteContent.find((content) => content.id === "home");

  const [editOptions, setEditOptions] = useState({
    page: "home",
    section: "",
    field: "",
    content: "",
    isEditor: false,
  });

  useEffect(() => {
    if (inView && !animated) {
      let tl = gsap.timeline();

      tl.from("#home-landing-h2 span", {
        stagger: 0.1,
        opacity: 0,
        y: -6,
        delay: 0.3,
      });

      tl.from("#home-landing-h5", {
        opacity: 0,
        delay: 0.1,
        y: -4,
      });

      tl.from("#home-landing-btn1", {
        opacity: 0,
        delay: 0.1,
        y: -2,
      });

      tl.from("#home-s1-h2", {
        opacity: 0,
        delay: 0.1,
        y: -2,
      });

      setAnimated(!animated);
    }
    // eslint-disable-next-line
  }, [inView]);

  return (
    <div ref={ref} id="homePage">
      <EditorDialog {...editOptions} />
      <section
        id="landingSection"
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div className="container">
          <div className="hstack justify-content-center">
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <h2 id="home-landing-h2">
                {homeData.landing.title.split(" ").map((word, index) => (
                  <span key={index}>
                    {word}
                    {index === 0 && <br />}{" "}
                  </span>
                ))}
              </h2>
              <EditButton
                page="home"
                section="landing"
                field="title"
                content={homeData.landing.title}
                setOptions={setEditOptions}
              />
            </div>
          </div>
          <div className="hstack justify-content-center">
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <h5 id="home-landing-h5">{homeData.landing.subtitle}</h5>
              <EditButton
                page="home"
                section="landing"
                field="subtitle"
                content={homeData.landing.subtitle}
                setOptions={setEditOptions}
              />
            </div>
          </div>
          <Link to="/contact" id="home-landing-btn1">
            <button className="btn btn-primary">Make an Appointment</button>
          </Link>
        </div>
      </section>
      <div className="mt-5">
        <section
          className="d-flex flex-column justify-content-center align-items-center homeContent mb-5"
          style={{ minHeight: "80vh" }}
        >
          <div
            className={`position-relative ${currentUser && "admin-hover-box"}`}
          >
            <h2>
              {homeData.s1.title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  {index === 4 && homeData.s1.title.split(" ").length > 6 && (
                    <br />
                  )}{" "}
                </span>
              ))}
            </h2>
            <EditButton
              page="home"
              section="s1"
              field="title"
              content={homeData.s1.title}
              setOptions={setEditOptions}
            />
          </div>
          <div className="row container tab1 mt-xl-5 mt-3 justify-content-center">
            <div className="col-xl-6 order-lg-0 order-1 me-xl-4">
              <div
                className={`position-relative ${
                  currentUser && "admin-hover-box"
                }`}
              >
                <p dangerouslySetInnerHTML={{ __html: homeData.s1.content }} />
                <EditButton
                  page="home"
                  section="s1"
                  field="content"
                  content={homeData.s1.content}
                  setOptions={setEditOptions}
                  isEditor={true}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.1,
                },
              }}
              viewport={{ once: true }}
              className={`col-xl-4 order-lg-1 order-0 img-box mb-4 mb-xl-0 position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <Parallax speed={2} translateY={["600px", "400px"]}>
                <div className="text">
                  <h2>Hi, I am Ashley!</h2>
                  <h4>
                    I support women who are feeling exhausted, stressed, and
                    burnt out.
                  </h4>
                  <Link to="/about">
                    <button className="btn btn-primary">
                      Read more about me
                    </button>
                  </Link>
                </div>
              </Parallax>
              <AsyncImage
                src={homeData.s1.src}
                alt="Therapy for Women | Ashley Franklin Wellness"
              />
              <input
                className="file-input"
                type="file"
                id="s1imginput"
                onChange={(e) =>
                  handleFileUpload(
                    e.target.files[0],
                    "home",
                    "s1",
                    siteContent,
                    dispatch
                  )
                }
              />
              <label htmlFor="s1imginput" className="btn btn-plus btn-edit">
                <PencilSquareIcon />
              </label>
            </motion.div>
          </div>
        </section>
        <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center homeContent mb-5">
          <div
            className={`position-relative ${currentUser && "admin-hover-box"}`}
          >
            <h1>
              {homeData.s2.title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  {index === 4 && homeData.s2.title.split(" ").length > 6 && (
                    <br />
                  )}{" "}
                </span>
              ))}
            </h1>
            <EditButton
              page="home"
              section="s2"
              field="title"
              content={homeData.s2.title}
              setOptions={setEditOptions}
            />
          </div>
          <div className="row container tab2 mt-xl-5 mt-3 justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.1,
                },
              }}
              viewport={{ once: true }}
              className={`col-xl-4 img-box mb-4 mb-xl-0 ${
                currentUser && "admin-hover-box"
              }`}
            >
              <AsyncImage
                src={homeData.s2.src}
                alt="Therapy for Women | Ashley Franklin Wellness"
              />
              <input
                className="file-input"
                type="file"
                id="s2imginput"
                onChange={(e) =>
                  handleFileUpload(
                    e.target.files[0],
                    "home",
                    "s2",
                    siteContent,
                    dispatch
                  )
                }
              />
              <label htmlFor="s2imginput" className="btn btn-plus btn-edit">
                <PencilSquareIcon />
              </label>
            </motion.div>
            <div className="ms-xl-4 col-xl-6 text-box">
              <div
                className={`position-relative ${
                  currentUser && "admin-hover-box"
                }`}
              >
                <p dangerouslySetInnerHTML={{ __html: homeData.s2.content }} />
                <EditButton
                  page="home"
                  section="s2"
                  field="content"
                  content={homeData.s2.content}
                  setOptions={setEditOptions}
                  isEditor={true}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center homeContent mb-5">
          <div
            className={`position-relative ${currentUser && "admin-hover-box"}`}
          >
            <h2>
              {homeData.s3.title.split(" ").map((word, index) => (
                <span key={index}>
                  {word}
                  {index === 4 && homeData.s3.title.split(" ").length > 6 && (
                    <br />
                  )}{" "}
                </span>
              ))}
            </h2>
            <EditButton
              page="home"
              section="s3"
              field="title"
              content={homeData.s3.title}
              setOptions={setEditOptions}
            />
          </div>
          <div className="row container tab3 mt-xl-5 mt-3 justify-content-center">
            <div className="col-xl-6 order-lg-0 order-1 me-xl-4 text-box">
              <div
                className={`position-relative ${
                  currentUser && "admin-hover-box"
                }`}
              >
                <p dangerouslySetInnerHTML={{ __html: homeData.s3.content }} />
                <EditButton
                  page="home"
                  section="s3"
                  field="content"
                  content={homeData.s3.content}
                  setOptions={setEditOptions}
                  isEditor={true}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.1,
                },
              }}
              viewport={{ once: true }}
              className={`col-xl-4 order-lg-1 order-0 img-box mb-4 mb-xl-0 ${
                currentUser && "admin-hover-box"
              }`}
            >
              <AsyncImage
                src={homeData.s3.src}
                alt="Therapy for Women | Ashley Franklin Wellness"
              />
              <input
                className="file-input"
                type="file"
                id="s3imginput"
                onChange={(e) =>
                  handleFileUpload(
                    e.target.files[0],
                    "home",
                    "s3",
                    siteContent,
                    dispatch
                  )
                }
              />
              <label htmlFor="s3imginput" className="btn btn-plus btn-edit">
                <PencilSquareIcon />
              </label>
            </motion.div>
          </div>
        </section>
        <section className="d-flex flex-column justify-content-center align-items-center cta">
          <div className="row container text-center">
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
                    delay: 0.3,
                  },
                }}
                viewport={{ once: true }}
              >
                {homeData.footer.content}
              </motion.p>
              <EditButton
                page="home"
                section="footer"
                field="content"
                content={homeData.footer.content}
                setOptions={setEditOptions}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <button className="btn btn-primary">Give a Shout!</button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
