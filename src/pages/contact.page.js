import { useState, useRef, useEffect } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import { useSelector } from "react-redux";

import EditButton from "../components/editBtn.component";

const Contact = () => {
  const form = useRef();

  const siteContent = useSelector((state) => state.siteContent);
  const currentUser = useSelector((state) => state.currentUser);

  const contactData = siteContent.find((content) => content.id === "contact");

  const siteSettings = useSelector((state) => state.siteSettings);

  const [data, setData] = useState({
    submitting: false,
    success: false,
    error: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setData({ submitting: true, success: false, error: undefined });

    emailjs
      .sendForm("service_76niayk", "template_roi5dk9", form.current, {
        publicKey: "-XqRZiagk_PMClVY5",
      })
      .then(
        () => {
          setData({ submitting: false, success: true, error: undefined });
        },
        (error) => {
          setData({ submitting: false, success: false, error: error.text });
        }
      );
  };

  useEffect(() => {
    if (data.success || data.error) {
      setTimeout(() => {
        setData({
          submitting: false,
          success: false,
          error: undefined,
        });
      }, 6000);
    }
  }, [data]);

  return (
    <div id="contactPage">
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
          {contactData.titlebox.title}
        </motion.h1>
        <EditButton
          page="contact"
          section="titlebox"
          field="title"
          content={contactData.titlebox.title}
        />
      </motion.div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <div
            className={`position-relative ${currentUser && "admin-hover-box"}`}
          >
            <p className="text-center">{contactData.s1.content}</p>
            <EditButton
              page="contact"
              section="s1"
              field="content"
              content={contactData.s1.content}
            />
          </div>
          <form
            className="mt-5 pb-2 pb-xl-0"
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="d-xl-flex gap-4 mb-3">
              <div className="w-100">
                <label htmlFor="firstNameInput" className="form-label">
                  First Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstNameInput"
                  name="fname"
                  placeholder=""
                  required
                />
              </div>
              <div className="w-100 mt-xl-0 mt-3">
                <label htmlFor="lastNameInput" className="form-label">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastNameInput"
                  name="lname"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="d-xl-flex gap-4 mb-3">
              <div className="w-100">
                <label htmlFor="emailInput" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  name="email"
                  placeholder=""
                  required
                />
              </div>
              <div className="w-100 mt-xl-0 mt-3">
                <label htmlFor="phoneInput" className="form-label">
                  Phone Number*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneInput"
                  name="phone"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="descInput" className="form-label">
                How can I help?*
              </label>
              <textarea
                className="form-control"
                id="descInput"
                name="message"
                rows="3"
                maxLength={500}
                style={{ height: 200, resize: "none" }}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary d-flex mx-auto mt-xl-4 mt-5"
              disabled={data.submitting}
            >
              Submit
            </button>
            {(data.success || data.error) && (
              <div
                className={`alert alert-${
                  data.success ? "success" : data.error && "danger"
                }`}
              >
                {data.success &&
                  "Thank you for contacting me! Your message has been successfully submitted and we'll be in touch soon."}
                {data.error &&
                  `An error occured while submitting: ${data.error}`}
              </div>
            )}
          </form>
          <hr className="my-xl-5 my-4" />
          <div
            className={`position-relative ${currentUser && "admin-hover-box"}`}
          >
            <p className="text-center">{contactData.s2.content}</p>
            <EditButton
              page="contact"
              section="s2"
              field="content"
              content={contactData.s2.content}
            />
          </div>
          <p className="text-center mt-3">
            <span>Phone: </span>
            {siteSettings.contactInfo.phone}
            <br />
            <span>Email: </span>
            <a href={`mailto:${siteSettings.contactInfo.email}`}>
              {siteSettings.contactInfo.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
