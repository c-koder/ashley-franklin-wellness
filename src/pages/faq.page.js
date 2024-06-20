import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { Helmet } from "react-helmet";

const FAQ = () => {
  const accordionItems = [
    {
      id: "faq1",
      question: "Are You Accepting New Clients?",
      answer:
        "Yes, I am currently accepting new clients. I offer teletherapy sessions using a HIPAA compliant audio and video service.",
      expanded: false,
    },
    {
      id: "faq2",
      question: "Why Therapy?",
      answer:
        "Therapy is incredibly effective. Scientific research has consistently shown that therapy can lead to positive changes and results. By partnering with a therapist, you gain a supportive space to share your story and struggles, which can alleviate the power that secrets and negative thoughts hold over you. Through therapy, you can connect your thoughts, emotions, and behaviors, paving the way for lasting transformation in your life.",
      expanded: false,
    },
    {
      id: "faq3",
      question:
        "How Long Will I Be in Therapy? How Long Does it Take to See Results?",
      answer:
        "The duration of therapy varies for each individual. The goal is not to keep you in therapy indefinitely, but rather to help you achieve your goals and enact meaningful change in your life. Therapy is a process that requires time, effort, and your commitment. Attending weekly sessions consistently can yield the best and fastest results. With dedication and perseverance, you can overcome your current challenges and create a more fulfilling life.",
      expanded: false,
    },
    {
      id: "faq4",
      question: "What Are Your Therapy Sessions Like?",
      answer:
        "Your therapy sessions will feel like purposeful conversations aimed at understanding and addressing your concerns. I will ask questions to delve into your thoughts and feelings, guiding the discussion based on your needs. There is no set agenda for each session, allowing flexibility to explore whatever arises. I may offer education on relevant topics and suggest exercises to practice between sessions. While discussing difficult topics, you may experience various emotions, which is a normal part of the therapeutic process. Together, we will navigate these emotions and work towards relieving their intensity, leading to feelings of relief, hope, and empowerment.",
      expanded: false,
    },
    {
      id: "faq5",
      question: "Do You Take My Insurance?",
      answer:
        "Currently, I accept Blue Cross Blue Shield, Harvard Pilgrim, United Healthcare, Tufts, Medicare, and Optum insurance plans. For other insurance providers, I am considered out-of-network. However, many clients utilize their out-of-network benefits and may receive partial reimbursement for therapy costs. I can provide the necessary documentation for you to submit to your insurance company for reimbursement. It is advisable to contact your insurance provider directly to inquire about your outpatient, out-of-network, mental health benefits.<br/><br/><span className='quote'>A Word of Caution About Using Insurance:</span><br/><br/>Utilizing insurance for therapy may involve limitations on the number of covered sessions and requests for therapy notes by the insurance company. Additionally, opting for out-of-network benefits may require a mental health diagnosis, potentially affecting your medical records. I believe therapy should be accessible without necessitating a permanent diagnosis. Your mental well-being is essential, and I strive to provide quality care while respecting your privacy.",
      expanded: false,
    },
    {
      id: "faq6",
      question: "Anything Else I Should Know?",
      answer:
        "<span className='quote'>Please note that I am only offering teletherapy sessions at this time</span><br/><br/>You are welcome to call, email, and text me outside of our sessions for scheduling purposes only. Please know that text and email are not secure forms of communication and your confidentiality cannot be assured with those means.<br/><br/><span>Phone: </span>774-476-0487<br /><span>Email: </span><a href='mailto:ashleyfranklinwellness@gmail.com'>ashleyfranklinwellness@gmail.com</a><br/><br/>Sessions are 50 minutes long and payment is due in full at the time of service. I accept venmo, debit and credit cards (Visa, MasterCard, Discover, American Express), and HSA and FSA cards.<br/><br/>I have a 24-hour cancellation policy, and if you cancel or reschedule your session less than 24 hours in advance you will be charged the full fee for the session. This is non-negotiable, and you will be required to have a credit card on file for any late cancellations.<br/><br/><span>I do not provide crisis services. If you are experiencing an emergency, please call 9-8-8, the 24 hour Suicide & Crisis Lifeline, or go to the nearest emergency room.</span>",
      expanded: false,
    },
  ];

  return (
    <div id="faqPage">
      <Helmet>
        <title>Therapy FAQ | Ashley Franklin Wellness</title>
        <meta
          name="description"
          content="Browse our therapy FAQ for insights on how counseling works, from session experiences to dealing with insurance, and how therapy fosters positive change."
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
          Frequently Asked Questions
        </motion.h1>
      </motion.div>
      <section
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "75vh" }}
      >
        <div className="container col-xl-7 my-xl-5 my-4">
          <div className="accordion accordion-flush">
            {accordionItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.2,
                    delay: 0.1 * index + 0.5,
                  },
                }}
                viewport={{ once: true }}
                key={item.id}
                className="accordion-item"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.id}`}
                  aria-expanded={item.expanded}
                  aria-controls={`${item.id}`}
                >
                  {item.question}
                </button>
                <div id={item.id} className="accordion-collapse collapse">
                  <div
                    className="accordion-body"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </motion.div>
            ))}
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
                  duration: 0.5,
                  delay: 0.4,
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
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.6,
                },
              }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <button className="btn btn-tertiary">
                  Make an Appointment
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
