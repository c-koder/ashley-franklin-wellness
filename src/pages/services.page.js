import { Link } from "react-router-dom";
import {
  SpecialtiesImg3,
  SpecialtiesImg4,
  SpecialtiesImg5,
} from "../utils/images";

const Services = () => {
  return (
    <div id="servicesPage">
      <div className="title-box">
        <h1>Services</h1>
      </div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-lg-7 my-lg-5 my-4 text-box">
          <div>
            <h4>Online Therapy</h4>
            <hr />
            <p className="mt-4">
              <span className="quote">
                &quot;"Sometimes the bravest and most important thing you can do
                is just show up. &quot; - Brené Brown
              </span>
              <br />
              <br />
              Online for Real Life
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
              With just a click, you're connected to a video session with your
              me. No need to worry about parking or navigating through
              unfamiliar office buildings. I make online counseling simple and
              stress-free.
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
            <h4>Clinical Supervision</h4>
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
            <h4>Consulting</h4>
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
            <p>
              Contact us today to schedule a free 15-minute consultation and
              take the first step towards addressing your organization's needs,
              <br />
              completing your licensure requirements, or achieving a happier,
              healthier you.
            </p>
            <div className="d-lg-flex gap-4 justify-content-center mt-4">
              <a href="tel:+17744760487" style={{ border: "none" }}>
                <button className="btn btn-tertiary">Lets have a call</button>
              </a>
              <Link to="/contact" style={{ border: "none" }}>
                <button className="btn btn-primary mt-lg-0 mt-3">
                  Or book online
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
