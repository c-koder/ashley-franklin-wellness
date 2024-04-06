import { Link } from "react-router-dom";
import {
  SpecialtiesImg3,
  SpecialtiesImg4,
  SpecialtiesImg5,
} from "../utils/images";

const Specialties = () => {
  return (
    <div id="specialtiesPage">
      <div className="title-box">
        <h1>Specialties</h1>
      </div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-xl-5 my-4 text-box">
          <div>
            <h4>Anxiety</h4>
            <hr />
            <div className="img-box img-box1 ms-xl-5 my-4 mb-xl-4">
              <img src={SpecialtiesImg3} alt="Anxiety" />
            </div>
            <p className="mt-4">
              Anxiety feels like worry cranked up to the max.
              <br />
              <br />
              You find yourself fretting about everything imaginable—past
              events, potential future scenarios, even the most unlikely
              situations. The <span className="quote">
                &quot;what if&quot;
              </span>{" "}
              game becomes a constant mental loop, replaying conversations and
              scrutinizing every single word.
              <br />
              <br />
              Your brain operates on overdrive, wishing for a moment of peace.
              You might try to "tune out" with distractions like binge-watching
              TV or indulging in a glass of wine that turns into more. Some
              days, you're like the Energizer Bunny, constantly busy to outrun
              the worries.
              <br />
              <br />
              Yet, beneath it all, there's a hidden strength in anxiety—a sort
              of superpower. It gifts you with extra energy and heightened
              cognitive abilities. You can foresee challenges and anticipate
              roadblocks in projects, almost like glimpsing into the future.
              <br />
              <br />
              But left unchecked, anxiety can overrun your life. That's where
              therapy steps in—it helps you harness your superpower for good:
              <br />
            </p>
            <ul>
              <li>Tackling negative thoughts and reclaiming control.</li>
              <li>
                Letting go of unrealistic expectations and finding your voice.
              </li>
              <li>
                Aligning with your true self and creating a fulfilling life.
              </li>
              <li>Managing stress and preventing burnout.</li>
            </ul>
          </div>
          <div className="my-5">
            <h4>Stress & Burnout</h4>
            <hr />
            <div className="img-box img-box2 me-xl-5 my-4 mb-xl-4">
              <img src={SpecialtiesImg4} alt="Stress & Burnout" />
            </div>
            <p className="mt-4">
              Stress is a daily reality, but when it becomes too much, it leaves
              you utterly exhausted.
              <br />
              <br />
              Physically, you feel drained—sore muscles, frequent illnesses,
              disrupted sleep, and an unquenchable appetite. Mentally, it's like
              walking through a fog, struggling to concentrate and feeling
              forgetful. Emotionally, you swing between numbness and
              overwhelming feelings, longing for a sense of vitality.
              <br />
              <br />
              This level of stress steals your joy and leaves you merely
              surviving. But therapy offers a path to reclaim your essence:
              <br />
            </p>
            <ul style={{ overflow: "hidden" }}>
              <li>
                Identifying stress triggers and developing coping strategies.
              </li>
              <li>
                Reconnecting with your priorities and setting healthy
                boundaries.
              </li>
              <li>
                Breaking free from people-pleasing and learning to prioritize
                self-care.
              </li>
              <li>
                Rediscovering your true self and finding peace amid the chaos.
              </li>
            </ul>
          </div>
          <div>
            <h4>Health & Wellness</h4>
            <hr />
            <div className="img-box img-box1 ms-xl-5 my-4 mb-xl-4">
              <img src={SpecialtiesImg5} alt="Health & Wellness" />
            </div>
            <p className="mt-4">
              Let’s talk about health and wellness.{" "}
              <span className="quote">
                Spoiler alert: it's not a one-size-fits-all kinda deal.
              </span>{" "}
              Nowadays, it feels like everyone and their dog has an opinion on
              what it means to be healthy. We're bombarded with influencers
              preaching about marathons, veganism, and ditching plastic like
              it's the holy grail. But here's the real deal: health and wellness
              are as unique as you are, and they're tightly linked to your
              mental well-being.
              <br />
              <br />
              So, where do we even begin?
              <br />
              <br />
              It can feel overwhelming, I get it. But in therapy, I’m here to
              guide you through it all. Here's what we can tackle together:
              <br />
            </p>
            <ul>
              <li>
                <span className="quote">
                  Integrating all aspects of your health—emotional, physical,
                  and spiritual:
                </span>{" "}
                Because true wellness isn’t just about hitting the gym or eating
                kale salads. It’s about finding harmony in every aspect of your
                life.
              </li>
              <li>
                <span className="quote">
                  Tuning in to what your body is telling you right now:
                </span>{" "}
                Sometimes, we get so caught up in the noise of everyday life
                that we forget to listen to our bodies. Together, we’ll learn to
                pay attention to those whispers and cues that tell us what we
                truly need.
              </li>
              <li>
                <span className="quote">
                  Diving into nutrition and lifestyle choices that bring balance
                  and resilience into your life:
                </span>{" "}
                Let’s face it, making healthy choices isn’t always easy. But
                with the right tools and support, you can create habits that
                nourish both your body and your mind.
              </li>
            </ul>
            <br />
            <p>
              And here’s the best part: therapy isn’t just about talking—it’s
              about taking action. In our sessions, we’ll roll up our sleeves
              and get to work, exploring practical strategies and actionable
              steps that move you closer to your wellness goals.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cta">
          <div className="container text-center">
            <p>
              Because let’s face it, your journey to wellness is yours alone,
              <br />
              and it’s about time you had someone in your corner to support you
              through it all.
            </p>
            <Link to="/contact">
              <button className="btn btn-primary">Give a shout!</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
