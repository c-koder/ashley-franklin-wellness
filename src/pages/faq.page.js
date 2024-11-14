import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";

import RichTextEditor from "react-rte";

import EditButton from "../components/editBtn.component";

import { deleteContent, updateFaqContent } from "../services/content.service";

const FaqEditorDialog = ({ section, values }) => {
  const [data, setData] = useState("");

  const [editorValue, setEditorValue] = useState(
    RichTextEditor.createEmptyValue()
  );

  const [error, setError] = useState(undefined);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setData(values);
    setEditorValue(
      RichTextEditor.createValueFromString(values.content, "html")
    );
  }, [values]);

  const handleContentChange = (value) => {
    setEditorValue(value);
    setData({ ...data, content: value.toString("html") });
  };

  const handleUpdateContent = async () => {
    if (data.question.trim() === "") {
      setError("Please include the question!");
    }
    if (data.content.trim() === "") {
      setError("Please include the content!");
    } else {
      setError(undefined);
      setProcessing(true);

      try {
        const result = await updateFaqContent(section, data);
        if (result) {
          window.location.reload();
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setProcessing(false);
      }
    }
  };

  return (
    <div
      className="modal fade"
      id="faqEditorModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="faqEditorModalStaticModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="faqEditorModalStaticModal">
              Now updating: faq / {section}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              disabled={processing}
              onClick={() => setError(undefined)}
            ></button>
          </div>
          <div className="modal-body p-4">
            <div className="form-group">
              <input
                type="text"
                value={data.question}
                onChange={(e) => setData({ ...data, question: e.target.value })}
                className="form-control shadow-none mb-3"
              />
            </div>
            <div className="form-group w-100">
              <div className="rte-wrapper">
                <RichTextEditor
                  value={editorValue}
                  onChange={handleContentChange}
                  toolbarConfig={{
                    display: [
                      "INLINE_STYLE_BUTTONS",
                      "BLOCK_TYPE_BUTTONS",
                      "LINK_BUTTONS",
                      "HISTORY_BUTTONS",
                    ],
                    INLINE_STYLE_BUTTONS: [
                      { label: "Bold", style: "BOLD" },
                      { label: "Italic", style: "ITALIC" },
                      { label: "Underline", style: "UNDERLINE" },
                    ],
                    BLOCK_TYPE_BUTTONS: [
                      {
                        label: "Unordered List",
                        style: "unordered-list-item",
                      },
                      { label: "Ordered List", style: "ordered-list-item" },
                    ],
                  }}
                  className="form-control"
                  toolbarClassName="rte-toolbar"
                  editorClassName="rte-editor"
                  editorStyle={{ minHeight: 180 }}
                  required={true}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer gap-2">
            {error && (
              <div className="alert alert-danger p-2 px-3 m-0">{error}</div>
            )}
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              disabled={processing}
              onClick={() => setError(undefined)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={processing}
              onClick={handleUpdateContent}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqDeleteDialog = ({ question, id }) => {
  const [error, setError] = useState(undefined);
  const [processing, setProcessing] = useState(false);

  const handleDelete = async () => {
    try {
      setProcessing(true);
      const result = await deleteContent("faq", id);
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      setError("Failed to delete this item, try again later!");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div
      id="deleteFaqModal"
      className="modal fade"
      tabIndex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className="card">
              <div className="card-header p-3 pb-2 px-4 bg-white ">
                <p className="font-weight-bold mb-1">
                  Are you sure you wanna delete this item?
                  <br />
                  <strong>{question}</strong>
                </p>
                <p className="text-muted" style={{ fontSize: 14 }}>
                  *This change will reflect in your website immediately.
                </p>
              </div>
              <div className="hstack gap-3 justify-content-end p-4">
                {error && (
                  <div className="alert alert-danger p-2 px-3 m-0">{error}</div>
                )}
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                  disabled={processing}
                  onClick={() => setError(undefined)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger px-4"
                  onClick={handleDelete}
                  disabled={processing}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const siteContent = useSelector((state) => state.siteContent);

  const [editOptions, setEditOptions] = useState({
    section: "s1",
    values: { question: "", content: "" },
  });

  const [deleteOptions, setDeleteOptions] = useState({
    id: "s1",
    question: "",
  });

  const faqData = siteContent.find((content) => content.id === "faq");

  return (
    <div id="faqPage">
      <FaqEditorDialog {...editOptions} />
      <FaqDeleteDialog {...deleteOptions} />
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
        className={`title-box position-relative ${
          currentUser && "admin-hover-box"
        }`}
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
          {faqData.titlebox.title}
          {currentUser !== null && (
            <button
              className="btn btn-plus ms-3"
              data-bs-toggle="modal"
              data-bs-target="#faqEditorModal"
              onClick={() =>
                setEditOptions({
                  section: `s${
                    Math.max(
                      0,
                      ...Object.keys(faqData)
                        .filter((key) => key.startsWith("s"))
                        .map((key) => parseInt(key.slice(1)))
                    ) + 1
                  }`,
                  values: {
                    question: "",
                    content: "",
                  },
                })
              }
            >
              <PlusCircleIcon />
            </button>
          )}
        </motion.h1>
        <EditButton
          page="faq"
          section="titlebox"
          field="title"
          content={faqData.titlebox.title}
        />
      </motion.div>
      <section
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "75vh" }}
      >
        <div className="container col-xl-7 my-xl-5 my-4">
          <div className="accordion accordion-flush">
            {Object.entries(faqData)
              .filter(([key]) => /^s\d+$/.test(key))
              .map(([key, value]) => ({ id: key, ...value }))
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((item, index) => (
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
                  <div
                    className={`position-relative mt-xl-0 mt-4 ${
                      currentUser && "admin-hover-box"
                    }`}
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
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                      {item.question === "Do You Take My Insurance?" && (
                        <div>
                          <iframe
                            width="100%"
                            height="400"
                            style={{
                              border: "none",
                              borderRadius: "20px",
                              margin: "auto",
                              display: "block",
                            }}
                            onload="const resize=() => this.height=this.clientWidth >= 600?350:590;resize();window.addEventListener('resize', resize);"
                            src="https://app.mentaya.com/public/practices/tCKq8pUeLcHaN3L787Hl/eligibility/widget"
                            title="Check Mentaya eligibility"
                          ></iframe>
                          <p className="accordion-body text-center">
                            We have partnered with Mentaya to help clients use
                            their out-of-network benefits to save money on
                            therapy. Use this tool below to see if you qualify
                            for reimbursement for my services.
                          </p>
                        </div>
                      )}
                    </div>
                    {currentUser !== null && (
                      <div>
                        <button
                          className="btn btn-plus btn-edit"
                          data-bs-toggle="modal"
                          data-bs-target="#faqEditorModal"
                          onClick={() =>
                            setEditOptions({
                              section: `s${index + 1}`,
                              values: {
                                question: item.question,
                                content: item.content,
                              },
                            })
                          }
                          style={{ right: 35, zIndex: 3 }}
                        >
                          <PencilSquareIcon />
                        </button>
                        <button
                          className="btn btn-plus btn-edit"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteFaqModal"
                          style={{ zIndex: 3 }}
                          onClick={() =>
                            setDeleteOptions({
                              id: `s${index + 1}`,
                              question: item.question,
                            })
                          }
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cta">
          <div className="container text-center">
            <div
              className={`position-relative ${
                currentUser && "admin-hover-box"
              }`}
            >
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
                {faqData.footer.content}
              </motion.p>
              <EditButton
                page="faq"
                section="footer"
                field="content"
                content={faqData.footer.content}
              />
            </div>
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
