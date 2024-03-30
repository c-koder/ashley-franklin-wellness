import { Link } from "react-router-dom";
import { AboutImg1 } from "../utils/images";

const About = () => {
  return (
    <div id="aboutPage">
      <div className="title-box">
        <h1>Who Is Ashley?</h1>
      </div>
      <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="row container tab1 mt-lg-5 mt-3 position-relative justify-content-center">
          <div className="col-lg-11 text-box">
            <div className="img-box me-lg-5">
              <img src={AboutImg1} alt="About Ashley" />
            </div>
            <p>
              Hey there! I’m Ashley. I specialize in therapy for women’s issues.
              I’m a licensed independent clinical social worker—in addition to
              being a wife, mom, and pet parent! :)
              <br />
              <br />
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
              like there’s no path to a better tomorrow. Amid all the
              expectations and pressures, you might be asking yourself:{" "}
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
              I prioritize a holistic approach to mental health. In our
              sessions, we will be looking at everything that influences your
              well-being. This includes your mind, along with your lifestyle,
              moods, and emotions, as each aspect of our lives is deeply
              interconnected. You’ve probably noticed how, when one part of your
              life is off, your whole being can suffer as a result.
              <br />
              <br />
              Above all, I’m here to help you get where you want to be. Whether
              you’re struggling with boundaries, confronting difficult events
              from your past, or battling any form of anxiety or depression, I’m
              here to listen and assist.
              <br />
              <br />
              During our sessions, I like to remind my clients,{" "}
              <span className="quote">&quot;This is your time.&quot;</span> I
              will gently encourage you to explore more about yourself, and you
              will have the space and freedom to share as much or as little as
              you’re comfortable with.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cta mt-4">
          <div className="container text-center">
            <p>
              If you think we’d make a good team, give me a call at (774)
              476-0487. We’ll introduce ourselves and discuss each of our
              availabilities. Then, the beauty of a telehealth practice is that
              you’ll be saving yourself the time and expense of a car trip.
              Let’s chat!
            </p>
            <div className="d-flex gap-4 justify-content-center mt-lg-4">
              <a href="tel:+17744760487">
                <button className="btn btn-tertiary">Lets have a call</button>
              </a>
              <Link to="/contact">
                <button className="btn btn-primary">Or leave a message</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
