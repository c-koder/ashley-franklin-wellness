import { useState, useEffect } from "react";

import RichTextEditor from "react-rte";

import { updateContent } from "../../services/content.service";

const EditorDialog = ({ page, section, field, isEditor, content }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(content);
    setEditorValue(RichTextEditor.createValueFromString(content, "html"));
  }, [content]);

  const [editorValue, setEditorValue] = useState(undefined);

  const [error, setError] = useState(undefined);
  const [processing, setProcessing] = useState(false);

  const handleContentChange = (value) => {
    setEditorValue(value);
    setData(value.toString("html"));
  };

  const handleUpdateContent = async () => {
    if (data === "") {
      setError("Please include the content!");
    } else {
      setError(undefined);
      setProcessing(true);

      try {
        const result = await updateContent(page, section, field, data);
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
      id="editorModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="editorModalStaticModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content new-article-modal">
          <div className="modal-header">
            <h5 className="modal-title" id="editorModalStaticModal">
              Now updating: {page} / {section} / {field}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              disabled={processing}
            ></button>
          </div>
          <div className="modal-body p-4">
            {!isEditor ? (
              <div className="form-group">
                <input
                  type="text"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="form-control shadow-none"
                />
              </div>
            ) : (
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
                        "IMAGE_BUTTON",
                        "BLOCK_TYPE_DROPDOWN",
                        "HISTORY_BUTTONS",
                        "BLOCKQUOTE_BUTTON",
                      ],
                      INLINE_STYLE_BUTTONS: [
                        {
                          label: "Bold",
                          style: "BOLD",
                        },
                        { label: "Italic", style: "ITALIC" },
                        { label: "Underline", style: "UNDERLINE" },
                      ],
                      BLOCK_TYPE_DROPDOWN: [
                        { label: "Normal", style: "unstyled" },
                        { label: "H1", style: "header-two" },
                        { label: "H2", style: "header-two" },
                        { label: "H3", style: "header-three" },
                        { label: "H4", style: "header-four" },
                        { label: "H5", style: "header-FOVE" },
                        { label: "H6", style: "header-SIX" },
                      ],
                      BLOCK_TYPE_BUTTONS: [
                        {
                          label: "Unordered List",
                          style: "unordered-list-item",
                        },
                        { label: "Ordered List", style: "ordered-list-item" },
                        { label: "Blockquote", style: "blockquote" },
                      ],
                    }}
                    className="form-control"
                    toolbarClassName="rte-toolbar"
                    editorClassName="rte-editor"
                    editorStyle={{ minHeight: 180 }}
                    required={true}
                    type="string"
                    multiline={true}
                  />
                </div>
              </div>
            )}
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

export default EditorDialog;
