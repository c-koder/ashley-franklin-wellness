import { HomeImg2, HomeImg3, HomeImg4 } from "../utils/images";

const Home = () => {
  return (
    <div id="homePage">
      <section
        id="landingSection"
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div className="container">
          <h1>
            Your Time
            <br />
            to Thrive
          </h1>
          <div className="">
            <h5>
              Quiet your negative thoughts and awaken a supportive inner voice.
            </h5>
          </div>
          <button className="btn btn-primary">Start Your Journey</button>
        </div>
      </section>
      <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center homeContent">
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
      <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center homeContent mb-5">
        <h1>
          Take Control of Your Story
          <br />
          and Find the Right Support System
        </h1>
        <div className="row container tab2 mt-lg-5 mt-3">
          <div className="col-4"></div>
          <div className="img-box d-lg-block d-none">
            <img src={HomeImg3} alt="Are You Living a Life of Fulfillment?" />
          </div>
          <div className="col-lg-8 text-box">
            <p>
              In today’s world, life for women is more complex than ever before,
              and women’s issues affect each of us differently. Topics like our
              self-worth, body image, how we see ourselves, and how society sees
              us—these are complicated conversations. But these concerns
              dramatically impact our day-to-day reality.
              <br />
              <br />
              Women’s issues also encompass our relationships with partners,
              family, and friends, along with the unique and personal challenges
              we face in those dynamics. Then there’s the whole realm of
              reproductive and sexual health, from fertility struggles or
              navigating pregnancy to postpartum adjustment, menopause, and
              more.
              <br />
              <br />
              Work-life balance? Feels more like attempting to play a tennis
              match with yourself, right? Juggling careers, families, and
              personal goals—these also fall under the umbrella of women’s
              issues. And let’s not forget about the tough stuff. There is the
              trauma we might have faced, be it assault, abuse, or any form of
              violence, along with the emotional wounds that tend to accrue over
              the course of one’s life and largely go unaddressed.
            </p>
          </div>
        </div>
      </section>
      <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center homeContent my-5 py-5">
        <h1>Open Up in a Judgement-Free Space</h1>
        <div className="row container tab3 mt-lg-5 mt-3">
          <div className="col-lg-8 text-box">
            <p>
              Therapy offers a designated time and place to see and understand
              each of these facets of our lives. And thankfully, it’s not all
              heavy stuff. We will tackle critical challenges while also taking
              time to truly appreciate and celebrate accomplishments,
              opportunities, motherhood, aging, finding joy in our intersecting
              identities—all of it has a place in your therapy sessions.
              <br />
              <br />
              Therapists serve as an outside eye to help you make sense of your
              life. At the same, we’re a lot like your best girlfriends. We get
              it! We’re here to talk about anything and everything and to work
              through whatever’s on your mind. There’s no set template for how a
              session must unfold. You get to decide what you’d like to express,
              share, examine, or explore.
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
              <br />
              <br />
              Locating this personal power is what makes therapy one of the
              greatest tools for realizing the life you’ve envisioned for
              yourself. If you’re looking for compassionate women’s telehealth
              therapy, give me a shout. I’m here to listen and help you navigate
              this crazy journey we call womanhood, one step at a time.
            </p>
            <button className="btn btn-primary">Give a Shout!</button>
          </div>
          <div className="col-4 img-box d-lg-block d-none">
            <img src={HomeImg4} alt="Are You Living a Life of Fulfillment?" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
