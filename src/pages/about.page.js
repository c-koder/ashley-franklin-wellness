import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

import {
  XMarkIcon,
  InformationCircleIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

import { PsychologyTodayLogo, ptsVerified } from "../utils/images";

import { AsyncImage } from "../components/image.component";

import EditButton from "../components/editBtn.component";

import { handleFileUpload } from "../utils/functions";

const About = () => {
  const dispatch = useDispatch();

  const siteContent = useSelector((state) => state.siteContent);
  const siteSettings = useSelector((state) => state.siteSettings);
  const currentUser = useSelector((state) => state.currentUser);

  const aboutData = siteContent.find((content) => content.id === "about");

  return (
    <div id="aboutPage">
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
          {aboutData.titlebox.title}
        </motion.h1>
        <EditButton
          page="about"
          section="titlebox"
          field="title"
          content={aboutData.titlebox.title}
        />
      </motion.div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                delay: 0.1,
              },
            }}
            viewport={{ once: true }}
            className={`img-box me-xl-5 mb-4 mb-xl-0 ${
              currentUser && "admin-hover-box"
            }`}
            style={{ zIndex: 1 }}
          >
            <AsyncImage
              src={aboutData.s1.src}
              alt="Therapy for Women | Ashley Franklin Wellness"
            />
            <button
              className="btn btn-tertiary"
              data-bs-toggle="modal"
              data-bs-target="#ptsModal"
            >
              <InformationCircleIcon />
              Psychology Today Summary
            </button>
            <input
              className="file-input"
              type="file"
              id="s1imginput"
              onChange={(e) =>
                handleFileUpload(
                  e.target.files[0],
                  "about",
                  "s1",
                  siteContent,
                  dispatch
                )
              }
            />
            <label
              htmlFor="s1imginput"
              className="btn btn-plus btn-edit"
              style={{ right: 0, left: "auto" }}
            >
              <PencilSquareIcon />
            </label>
          </motion.div>
          <div
            className={`position-relative ${currentUser && "admin-hover-box"}`}
          >
            <p dangerouslySetInnerHTML={{ __html: aboutData.s1.content }} />
            <EditButton
              page="about"
              section="s1"
              field="content"
              content={aboutData.s1.content}
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
                    duration: 0.4,
                    delay: 0.3,
                  },
                }}
                viewport={{ once: true }}
              >
                {aboutData.footer.content}
              </motion.p>
              <EditButton
                page="about"
                section="footer"
                field="content"
                content={aboutData.footer.content}
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
              >
                <button className="btn btn-tertiary">Lets have a call</button>
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.7,
                  },
                }}
                viewport={{ once: true }}
              >
                <Link to="/contact">
                  <button className="btn btn-primary mt-xl-0 mt-3">
                    Or leave a message
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal modal-lg fade"
        id="ptsModal"
        data-bs-keyboard="true"
        tabIndex="-1"
        aria-labelledby="ptsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body px-5 py-4">
              <div className="hstack mt-3 mb-4">
                <button className="btn close-btn" data-bs-dismiss="modal">
                  <XMarkIcon />
                </button>
                <AsyncImage
                  src={PsychologyTodayLogo}
                  alt="Psychology Today Logo"
                />
              </div>
              <div
                className={`position-relative ${
                  currentUser && "admin-hover-box"
                }`}
              >
                <p
                  dangerouslySetInnerHTML={{ __html: aboutData.pts.content }}
                />
                <EditButton
                  page="about"
                  section="pts"
                  field="content"
                  content={aboutData.pts.content}
                  isEditor={true}
                />
              </div>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/contact">
                  <button
                    className="btn btn-secondary my-2 mb-3"
                    data-bs-dismiss="modal"
                  >
                    Give a Shout!
                  </button>
                </Link>
                <a
                  href="https://www.psychologytoday.com/profile/1035259"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-pts d-flex gap-2 my-2 mb-3">
                    <img
                      src={ptsVerified}
                      alt="pts-verified"
                      style={{ width: 32, height: 32 }}
                    />
                    View Profile
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
