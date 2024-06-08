import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div id="servicesPage">
      <Helmet>
        <title>
          Online Therapy for Women | Clinical Social Work Supervision
        </title>
        <meta
          name="description"
          content="Connect with an experienced female counselor for professional online therapy, social work consultancy, and clinical supervision tailored to your needs."
        />
      </Helmet>
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
        className="title-box"
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
          Wellness Services
        </motion.h1>
      </motion.div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <div>
            <h2>Online Therapy</h2>
            <hr />
            <p className="mt-4">
              <span className="quote">
                &quot;Sometimes the bravest and most important thing you can do
                is just show up.&quot; - Brené Brown
              </span>
              <br />
              <br />
              Online Therapy For Real Life
              <br />
              <br />
              Life can be overwhelming, just ask Melissa. Juggling the demands
              of a being a wife, mom to three kids and working full time as a
              nurse left her feeling drained and emotionally spent. Traditional
              therapy options didn't fit her hectic schedule or offered the
              support she needed. Can you relate?
              <br />
              <br />I understand that life doesn't always allow for therapy
              appointments across town. That's why I offer convenient online
              counseling that fits into your life seamlessly.
              <br />
              <br />
              With just a click, you're connected to a video session with me. No
              need to worry about parking or navigating through unfamiliar
              office buildings. I make online counseling simple and stress-free.
              <br />
              <br />
              But does therapy over the web really work? Absolutely. I have been
              providing online counseling long before it became mainstream.
              Through countless sessions, I have found it to be just as
              effective, if not more so, than traditional in-person therapy.
              <br />
              <br />
              You might wonder if the experience will be the same as
              face-to-face sessions. Rest assured, I am skilled at fostering
              genuine connections through video sessions. Plus, online therapy
              offers unique benefits like screen sharing for visual learners and
              the comfort of participating from your own home.
              <br />
              <br />
              So, is online counseling just a gimmick? Far from it. I will
              provide you with quality care tailored to your needs. Whether
              you're in your favorite hoodie with a cup of tea or snuggled up
              with your pet, therapy can happen on your terms.
              <br />
              <br />
              Don't let life's circumstances hold you back from getting the help
              you deserve. Contact me today for a free 15-minute phone
              consultation and take the first step towards a happier, healthier
              you: <a href="tel:+17744760487">774-476-0487</a> or{" "}
              <Link to="/contact">Book Online</Link>.
            </p>
          </div>
          <div className="my-5">
            <h2>Social Worker Clinical Supervision</h2>
            <hr />
            <p className="mt-4">
              Over the course of my extensive career, I have honed my expertise
              in providing comprehensive clinical supervision to social work
              professionals. With a wealth of experience spanning numerous
              years, I have had the privilege of guiding and mentoring
              clinicians as they navigate the intricacies of licensure
              requirements and professional development. My approach to
              supervision is rooted in empathy, understanding, and a deep
              commitment to fostering growth and competence in fellow
              practitioners.
              <br />
              <br />
              Through collaborative dialogue and reflective practice, I strive
              to create a supportive and enriching environment where social
              workers can explore challenges, enhance their skills, and
              ultimately flourish in their roles. It is both a passion and a
              privilege to contribute to the advancement of our profession
              through the provision of high-quality clinical supervision.
              <br />
              <br />
              Contact me today to take the first step towards completing your
              licensure requirements:{" "}
              <a href="tel:+17744760487">774-476-0487</a> or{" "}
              <Link to="/contact">Book Online</Link>.
            </p>
          </div>
          <div>
            <h2>Social Worker Consultation</h2>
            <hr />
            <p className="mt-4">
              I provide professional social work consultation services tailored
              for businesses and agencies, drawing upon my extensive experience
              and expertise to cultivate a supportive and inclusive environment.
              Through collaborative partnerships with organizations, I strive to
              enhance employee well-being, client satisfaction, and overall
              organizational success. Utilizing evidence-based practices and a
              client-centered approach, I work closely with stakeholders to
              identify strengths, address challenges, and implement effective
              strategies that promote positive outcomes.
              <br />
              <br />
              Whether it's developing policies and programs, conducting
              trainings, or providing ongoing support and guidance, my goal is
              to empower businesses and agencies to create environments that
              prioritize the holistic well-being of both employees and clients.
              Together, we can foster a culture of compassion, resilience, and
              excellence.
              <br />
              <br />
              Contact me today to schedule a free 15 minute consultation to
              address your organizations needs:{" "}
              <a href="tel:+17744760487">774-476-0487</a> or{" "}
              <Link to="/contact">Book Online</Link>.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cta">
          <div className="container text-center">
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
              Contact us today to schedule a free 15-minute consultation and
              take the first step towards addressing your organization's needs,
              <br />
              completing your licensure requirements, or achieving a happier,
              healthier you.
            </motion.p>
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
                href="tel:+17744760487"
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
