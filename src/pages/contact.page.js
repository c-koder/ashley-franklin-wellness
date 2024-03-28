import { useEffect, useState } from "react";

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="contactPage">
      <div className="title-box">
        <h1>Contact</h1>
      </div>
      <section className="min-vh-100 container d-flex flex-column justify-content-center align-items-center content">
        <div className="row tab1 mt-lg-5 mt-3 position-relative justify-content-center">
          <div className="col-lg-9 text-box">
            <p className="text-center mt-3 mt-lg-0">
              Put the self-help book down! I would love to hear from you. We can
              talk about if we would be a great fit and get started on your
              journey. I am happy to answer any questions you may have.
            </p>
            <form
              className="mt-5"
              onKeyPress={(e) => e.preventDefault()}
              onSubmit={handleSubmit}
            >
              <div className="d-lg-flex gap-4 mb-3">
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
                <div className="w-100 mt-lg-0 mt-3">
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
              <div className="d-lg-flex gap-4 mb-3">
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
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                <div className="w-100 mt-lg-0 mt-3">
                  <label htmlFor="phoneInput" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneInput"
                    placeholder=""
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
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
                className="btn btn-tertiary d-flex mx-auto mt-lg-4 mt-5"
              >
                Submit
              </button>
            </form>
            <hr className="my-5" />
            <p className="text-center">
              I do not provide crisis services. If you are experiencing an
              emergency, please call 9-8-8, the 24 hour Suicide & Crisis
              Lifeline, or go to the nearest emergency room.
            </p>
            <p className="text-center mt-3">
              <span>Phone: </span>774-476-0487
              <br />
              <span>Email: </span>TBD
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
