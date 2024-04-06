import { useState } from "react";

import { motion } from "framer-motion";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    desc: "",
  });

  /** TODO */
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contactPage">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="title-box"
      >
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
            },
          }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h1>
      </motion.div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <p className="text-center">
            Put the self-help book down! I would love to hear from you. We can
            talk about if we would be a great fit and get started on your
            journey. I am happy to answer any questions you may have.
          </p>
          <form
            className="mt-5 pb-2 pb-xl-0"
            onKeyPress={(e) => e.preventDefault()}
            onSubmit={handleSubmit}
          >
            <div className="d-xl-flex gap-4 mb-3">
              <div className="w-100">
                <label htmlFor="firstNameInput" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstNameInput"
                  placeholder=""
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                />
              </div>
              <div className="w-100 mt-xl-0 mt-3">
                <label htmlFor="lastNameInput" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastNameInput"
                  placeholder=""
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="d-xl-flex gap-4 mb-3">
              <div className="w-100">
                <label htmlFor="emailInput" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder=""
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="w-100 mt-xl-0 mt-3">
                <label htmlFor="phoneInput" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneInput"
                  placeholder=""
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="descInput" className="form-label">
                How can I help?
              </label>
              <textarea
                className="form-control"
                id="descInput"
                rows="3"
                maxLength={500}
                style={{ height: 200, resize: "none" }}
                value={data.desc}
                onChange={(e) => setData({ ...data, desc: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary d-flex mx-auto mt-xl-4 mt-5"
            >
              Submit
            </button>
          </form>
          <hr className="my-xl-5 my-4" />
          <p className="text-center">
            I do not provide crisis services. If you are experiencing an
            emergency, please call 9-8-8, the 24 hour Suicide & Crisis Lifeline,
            or go to the nearest emergency room.
          </p>
          <p className="text-center mt-3">
            <span>Phone: </span>774-476-0487
            <br />
            <span>Email: </span>TBD
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
