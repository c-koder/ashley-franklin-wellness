import { HomeImg2 } from "../utils/images";

const Home = () => {
  return (
    <div id="homePage">
      <section
        id="landingSection"
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div className="container">
          <h1>
            From surviving
            <br />
            to thriving
          </h1>
          <div className="">
            <h5>
              Quiet your negative thoughts and awaken a supportive inner voice.
            </h5>
          </div>
          <button className="btn btn-primary">Start Your Journey</button>
        </div>
      </section>
      <section
        id="homeContent"
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
      >
        <h1>Are You Living a Life of Fulfillment?</h1>
        <div className="row container tab1 mt-lg-5 mt-3">
          <div className="col-lg-8 text-box">
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
              indulgence. But it’s actually the opposite of selfish. When we, as
              women, learn to prioritize our own mental health, we become
              unstoppable, and we have more of ourselves to give to the other
              people and pursuits that fill our lives. Therapy allows you to
              look closer at where you are, where you’re headed, and what might
              be holding you back—so you can move forward with greater
              authenticity and intention.
            </p>
          </div>
          <div className="col-4 img-box d-lg-block d-none">
            <img src={HomeImg2} alt="Are You Living a Life of Fulfillment?" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
