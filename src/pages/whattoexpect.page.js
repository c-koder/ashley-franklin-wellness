import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const WhatToExpect = () => {
  return (
    <div id="whatToExpectPage">
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
          What to Expect
        </motion.h1>
      </motion.div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <p>
            Feeling a bit jittery about diving into therapy? Totally normal. I
            mean, you're about to spill your guts to someone you barely know!
            And if that little voice in your head is throwing around all sorts
            of scary scenarios{" "}
            <span className="quote">
              (&quot;She'll judge me, I'll never measure up, I'm beyond help,
              etc...&quot;)
            </span>
            , it can really mess with your confidence to seek the support you
            deserve.
            <br />
            <br />
            <span className="quote">But guess what?</span> That nagging voice?{" "}
            <span style={{ fontWeight: 600 }}>It's a big, fat liar.</span>
            <br />
            <br />
            To ease some of those nerves and give you a sneak peek into what
            therapy looks like, here's the lowdown on how it all goes down and
            what you can expect during our sessions.
          </p>
          <br />
          <h4>Getting Started</h4>
          <hr />
          <p>
            Just reach out to me (or{" "}
            <Link to="/contact">shoot me a message</Link> through the contact
            form) for a free chat over the phone. It's our chance to see if we
            click. I'll ask you a few questions, share about myself and my
            approach, and if you feel like we're a match made in therapy heaven,
            we'll get your first session booked.
            <br />
            <br />
            And hey, if it turns out we're not the perfect fit, no hard
            feelings. I'll gladly point you in the direction of other therapists
            or services that might be a better match. Either way, you'll walk
            away from our chat with a bit more clarity and support than before.
            <br />
            <br />
            Once you're all set, I'll get you set up in my online client portal.
            Just a bit of paperwork to fill out before our first session, and
            you're good to go.
            <br />
            <br />
            On the day of your appointment, just click the link to join our
            telehealth meeting. It is the same link every time.
          </p>
          <br />
          <h4>What Happens in a Therapy Session?</h4>
          <hr />
          <p>
            Our sessions are all about what's happening right now. I'll throw
            some questions your way, check in on how you're feeling, and yeah,
            we'll dig into your past—including those childhood memories and
            family dynamics. It's all part of getting to know you inside and
            out.
            <br />
            <br />
            But what really counts is what's unfolding in your life day by day.
            What does a great day look like for you? And a not-so-great day?
            What's that little voice whispering when you're feeling low? What
            are your dreams and what's holding you back? Through our chats,
            we'll build trust, nail down your goals, and map out what success
            means to you.
            <br />
            <br />
            Expect a mix of humor, straight-up honesty, empathy, and respect.{" "}
            <span style={{ fontWeight: 600 }}>
              Promise, I'm not here to judge you.
            </span>
            <br />
            <br />
            It might take a few sessions for us to hit our stride and for you to
            feel totally comfortable opening up. But with time, you'll find your
            groove as you walk through that door each week. That's why I'm big
            on weekly sessions at first—it speeds up the process and keeps us
            moving toward your goals.
            <br />
            <br />
            Oh, and don't forget to bring along a notebook or journal. Jot down
            anything that pops into your head during our sessions. Even if it
            seems random, there's probably a deeper meaning to explore—and
            that's where I come in.
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
                  delay: 0.3,
                },
              }}
              viewport={{ once: true }}
            >
              So, ready to kick off this journey together?
              <br />
              Your story matters, your feelings are valid, and I'm here to help
              you every step of the way.
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
