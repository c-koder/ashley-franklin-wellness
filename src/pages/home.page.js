import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { gsap } from "gsap";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { Parallax } from "react-scroll-parallax";

import { AshleyImg1, AshleyImg3, HomeImg3 } from "../utils/images";

const Home = () => {
  const [animated, setAnimated] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !animated) {
      let tl = gsap.timeline();

      tl.from("#home-landing-h1 span", {
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

      tl.from("#home-s1-h1", {
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
      <section
        id="landingSection"
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div className="container">
          <h1 id="home-landing-h1">
            <span>Your</span> <span>Time</span>
            <br />
            <span>to</span> <span>Thrive</span>
          </h1>
          <h5 id="home-landing-h5">
            Quiet your negative thoughts and awaken a supportive inner voice.
          </h5>
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
          <h1>Are You Living a Life of Fulfillment?</h1>
          <div className="row container tab1 mt-xl-5 mt-3 justify-content-center">
            <div className="col-xl-6 order-lg-0 order-1 me-xl-4">
              <p>
                Or, like too many women, do you feel like you’re{" "}
                <span className="quote">&quot;just getting by&quot;?</span> Of
                course, life has an emotional ebb and flow. It’s a mix of
                challenges and rewards, victories and disappointments. But if
                you’ve noticed yourself dealing with more hard days than good
                days—or if each day passes with a kind of rut-like sameness—it’s
                time to talk to someone.
                <br />
                <br />
                Some people view taking this time for themselves as a kind of
                indulgence. But it’s actually the opposite of selfish. When we,
                as women, learn to prioritize our own mental health, we become
                unstoppable, and we have more of ourselves to give to the other
                people and pursuits that fill our lives. Therapy allows you to
                look closer at where you are, where you’re headed, and what
                might be holding you back—so you can move forward with greater
                authenticity and intention.
              </p>
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
              className="col-xl-4 order-lg-1 order-0 img-box mb-4 mb-xl-0"
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
              <img
                src={AshleyImg3}
                alt="Are You Living a Life of Fulfillment?"
              />
            </motion.div>
          </div>
        </section>
        <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center homeContent mb-5">
          <h1>
            Take Control of Your Story
            <br />
            and Find the Right Support System
          </h1>
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
              className="col-xl-4 img-box mb-4 mb-xl-0"
            >
              <img
                src={HomeImg3}
                alt="Take Control of Your Story and Find the Right Support System"
              />
            </motion.div>
            <div className="ms-xl-4 col-xl-6 text-box">
              <p>
                In today’s world, life for women is more complex than ever
                before, and women’s issues affect each of us differently. Topics
                like our self-worth, body image, how we see ourselves, and how
                society sees us—these are complicated conversations. But these
                concerns dramatically impact our day-to-day reality.
                <br />
                <br />
                Women’s issues also encompass our relationships with partners,
                family, and friends, along with the unique and personal
                challenges we face in those dynamics. Then there’s the whole
                realm of reproductive and sexual health, from fertility
                struggles or navigating pregnancy to postpartum adjustment,
                menopause, and more.
                <br />
                <br />
                Work-life balance? Feels more like attempting to play a tennis
                match with yourself, right? Juggling careers, families, and
                personal goals—these also fall under the umbrella of women’s
                issues. And let’s not forget about the tough stuff. There is the
                trauma we might have faced, be it assault, abuse, or any form of
                violence, along with the emotional wounds that tend to accrue
                over the course of one’s life and largely go unaddressed.
              </p>
            </div>
          </div>
        </section>
        <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center homeContent mb-5">
          <h1>Open Up in a Judgement-Free Space</h1>
          <div className="row container tab3 mt-xl-5 mt-3 justify-content-center">
            <div className="col-xl-6 order-lg-0 order-1 me-xl-4 text-box">
              <p>
                Therapy offers a designated time and place to see and understand
                each of these facets of our lives. And thankfully, it’s not all
                heavy stuff. We will tackle critical challenges while also
                taking time to truly appreciate and celebrate accomplishments,
                opportunities, motherhood, aging, finding joy in our
                intersecting identities—all of it has a place in your therapy
                sessions.
                <br />
                <br />
                Therapists serve as an outside eye to help you make sense of
                your life. At the same, we’re a lot like your best girlfriends.
                We get it! We’re here to talk about anything and everything and
                to work through whatever’s on your mind. There’s no set template
                for how a session must unfold. You get to decide what you’d like
                to express, share, examine, or explore.
                <br />
                <br />
                Over time, as we observe what feelings, memories, or themes keep
                coming up—you’ll likely witness your own perspective broaden.
                You’ll begin to see yourself, your circumstances, and your
                capabilities in a whole new light. You might be surprised to
                discover how certain elements of your personality are influenced
                by a particular behavioral pattern or diagnosis. You could learn
                that specific characteristics you’ve labeled as “just the way I
                am” might actually be well within your ability to adjust or
                transform. In the process, you’ll experience an incredible sense
                of self-empowerment!
              </p>
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
              className="col-xl-4 order-lg-1 order-0 img-box mb-4 mb-xl-0"
            >
              <img src={AshleyImg1} alt="Open Up in a Judgement-Free Space" />
            </motion.div>
          </div>
        </section>
        <section className="d-flex flex-column justify-content-center align-items-center cta">
          <div className="row container text-center">
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
              Locating this personal power is what makes therapy one of the
              greatest tools for realizing the life you’ve envisioned for
              yourself. If you’re looking for compassionate women’s telehealth
              therapy, give me a shout. I’m here to listen and help you navigate
              this crazy journey we call womanhood, one step at a time.
            </motion.p>
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
