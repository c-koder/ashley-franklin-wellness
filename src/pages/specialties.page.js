import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

import { PencilSquareIcon } from "@heroicons/react/24/solid";

import { AsyncImage } from "../components/image.component";

import EditButton from "../components/editBtn.component";

import { handleFileUpload } from "../utils/functions";

const Specialties = () => {
  const dispatch = useDispatch();

  const siteContent = useSelector((state) => state.siteContent);
  const currentUser = useSelector((state) => state.currentUser);

  const specialtiesData = siteContent.find(
    (content) => content.id === "specialties"
  );

  return (
    <div id="specialtiesPage">
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
          {specialtiesData.titlebox.title}
        </motion.h1>
        <EditButton
          page="specialties"
          section="titlebox"
          field="title"
          content={specialtiesData.titlebox.title}
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
              <h2>{specialtiesData.s1.title}</h2>
              <EditButton
                page="specialties"
                section="s1"
                field="title"
                content={specialtiesData.s1.title}
              />
            </div>
            <hr />
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
              className={`img-box img-box1 ms-xl-5 mb-xl-4 ${
                currentUser && "admin-hover-box"
              }`}
              style={{ zIndex: 1 }}
            >
              <AsyncImage
                src={specialtiesData.s1.src}
                alt={`${specialtiesData.s1.title} | Ashley Franklin Wellness`}
              />
              <input
                className="file-input"
                type="file"
                id="s1imginput"
                onChange={(e) =>
                  handleFileUpload(
                    e.target.files[0],
                    "specialties",
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
            <div
              className={`position-relative mt-xl-0 mt-4 ${
                currentUser && "admin-hover-box"
              }`}
            >
              <p
                dangerouslySetInnerHTML={{ __html: specialtiesData.s1.content }}
              />
              <EditButton
                page="specialties"
                section="s1"
                field="content"
                content={specialtiesData.s1.content}
                isEditor={true}
                style={{ left: 0, right: "auto" }}
              />
            </div>
          </div>
          <div className="my-5">
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <h2>{specialtiesData.s2.title}</h2>
              <EditButton
                page="specialties"
                section="s2"
                field="title"
                content={specialtiesData.s2.title}
              />
            </div>
            <hr />
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
              className={`img-box img-box2 me-xl-5 ${
                currentUser && "admin-hover-box"
              }`}
              style={{ zIndex: 1 }}
            >
              <AsyncImage
                src={specialtiesData.s2.src}
                alt={`${specialtiesData.s2.title} | Ashley Franklin Wellness`}
              />
              <input
                className="file-input"
                type="file"
                id="s2imginput"
                onChange={(e) =>
                  handleFileUpload(
                    e.target.files[0],
                    "specialties",
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
            <div
              className={`position-relative mt-xl-0 mt-4 ${
                currentUser && "admin-hover-box"
              }`}
            >
              <p
                dangerouslySetInnerHTML={{ __html: specialtiesData.s2.content }}
              />
              <EditButton
                page="specialties"
                section="s2"
                field="content"
                content={specialtiesData.s2.content}
                isEditor={true}
              />
            </div>
          </div>
          <br />
          <div>
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
              <h2>{specialtiesData.s3.title}</h2>
              <EditButton
                page="specialties"
                section="s3"
                field="title"
                content={specialtiesData.s3.title}
              />
            </div>
            <hr />
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
              className={`img-box img-box1 ms-xl-5 ${
                currentUser && "admin-hover-box"
              }`}
              style={{ zIndex: 1 }}
            >
              <AsyncImage
                src={specialtiesData.s3.src}
                alt={`${specialtiesData.s3.title} | Ashley Franklin Wellness`}
              />
              <input
                className="file-input"
                type="file"
                id="s3imginput"
                onChange={(e) =>
                  handleFileUpload(
                    e.target.files[0],
                    "specialties",
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
            <div
              className={`position-relative mt-xl-0 mt-4 ${
                currentUser && "admin-hover-box"
              }`}
            >
              <p
                dangerouslySetInnerHTML={{ __html: specialtiesData.s3.content }}
              />
              <EditButton
                page="specialties"
                section="s3"
                field="content"
                content={specialtiesData.s3.content}
                isEditor={true}
                style={{ left: 0, right: "auto" }}
              />
            </div>
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
                {specialtiesData.footer.content}
              </motion.p>
              <EditButton
                page="specialties"
                section="footer"
                field="content"
                content={specialtiesData.footer.content}
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
                <button className="btn btn-primary">Give a shout!</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
