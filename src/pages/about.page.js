import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { XMarkIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

import { AshleyImg2, PsychologyTodayLogo, ptsVerified } from "../utils/images";

import { AsyncImage } from "../components/image.component";

import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div id="aboutPage">
      <Helmet>
        <title>Ashley Franklin | Women's Therapist in Cape Cod</title>
        <meta
          name="description"
          content="Meet Ashley Franklin, a dedicated womens therapist and licensed independent clinical social worker offering women counseling on life's challenges with expertise."
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
          Who is Ashley Franklin?
        </motion.h1>
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
            className="img-box me-xl-5 mb-4 mb-xl-0"
          >
            <AsyncImage
              src={AshleyImg2}
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
          </motion.div>
          <p>
            Hey there! I’m Ashley. I specialize in therapy for women’s issues.
            I’m a licensed independent clinical social worker—in addition to
            being a wife, mom, and pet parent! :)
            <br />
            <br />
            <h2 style={{ fontWeight: 700, fontSize: 24 }}>
              Why I'm a Womens Therapist?
            </h2>
            I’ve been in the mental health field since 2009 because I love
            helping people recognize that they have the ability to create the
            life they desire. After receiving a bachelor’s in Psychology, I
            earned a master’s from Boston University, and my practice is
            currently geared toward helping women navigate life’s twists and
            turns.
            <br />
            <br />
            Life is one wild ride, isn’t it? So often, we inadvertently get in
            our own way, berate ourselves for our shortcomings, and then feel
            like there’s no path to a better tomorrow. Amid all the expectations
            and pressures, you might be asking yourself:{" "}
            <span className="quote">
              &quot;Am I enough to handle this?&quot;
            </span>{" "}
            If you take nothing else away from this website or our time
            together, I would like you to remember:{" "}
            <span className="quote">
              you are more than enough—just as you are.
            </span>
            <br />
            <br />
            I prioritize a holistic approach to mental health. In our sessions,
            we will be looking at everything that influences your well-being.
            This includes your mind, along with your lifestyle, moods, and
            emotions, as each aspect of our lives is deeply interconnected.
            You’ve probably noticed how, when one part of your life is off, your
            whole being can suffer as a result.
            <br />
            <br />
            Above all, I’m here to help you get where you want to be. Whether
            you’re struggling with boundaries, confronting difficult events from
            your past, or battling any form of anxiety or depression, I’m here
            to listen and assist.
            <br />
            <br />
            During our sessions, I like to remind my clients,{" "}
            <span className="quote">&quot;This is your time.&quot;</span> I will
            gently encourage you to explore more about yourself, and you will
            have the space and freedom to share as much or as little as you’re
            comfortable with.
          </p>
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
              viewport={{ once: true }}
            >
              If you think we’d make a good team, give me a call at (774)
              476-0487. We’ll introduce ourselves and discuss each of our
              availabilities. Then, the beauty of a telehealth practice is that
              you’ll be saving yourself the time and expense of a car trip.
              Let’s chat!
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
              <p>
                Life is one wild ride, isn’t it? I would like you to remember:
                you are more than enough—just as you are. I’m here to help you
                get where you want to be. If you’re struggling with depression,
                anxiety, negative thoughts, low self-esteem, stress, life
                transitions, insomnia, weight gain, or a chronic disease or
                illness, I’m here to listen and assist.
                <br />
                <br />I prioritize a holistic approach to mental health. In our
                sessions, we will be looking at everything that influences your
                well-being. This includes your mind, along with your lifestyle,
                moods, and emotions, as each aspect of our lives is deeply
                interconnected.
                <br />
                <br />
                During our sessions, I like to remind my clients,{" "}
                <span className="quote">&quot;This is your time.&quot;</span> I
                will gently encourage you to explore more about yourself, and
                you will have the space and freedom to share as much or as
                little as you’re comfortable with.
                <br />
                <br />
                If you’re looking for compassionate women’s telehealth therapy,
                give me a shout. I’m here to help you navigate this crazy
                journey we call womanhood, one step at a time.
              </p>
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
