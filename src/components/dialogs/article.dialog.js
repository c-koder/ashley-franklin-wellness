import { useState, useEffect } from "react";

import { WithContext as ReactTags } from "react-tag-input";

import RichTextEditor from "react-rte";

import moment from "moment";

import { auth } from "../../config/fb";

import { createArticle, updateArticle } from "../../services/article.service";

const ArticleDialog = ({ isEdit, editingArticle }) => {
  const [data, setData] = useState({
    title: "",
    metaTitle: "",
    metaDescription: "",
    image: "",
    alt: "",
    keywords: [],
    author: "",
    publishDate: "",
    slug: "",
    content: "",
  });

  const [editorValue, setEditorValue] = useState(
    RichTextEditor.createValueFromString(data.content, "html")
  );

  const [error, setError] = useState(undefined);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (editingArticle) {
      setData({ ...editingArticle });
      setEditorValue(
        RichTextEditor.createValueFromString(editingArticle.content, "html")
      );
    }
  }, [editingArticle]);

  const handleContentChange = (value) => {
    setEditorValue(value);
    setData({ ...data, content: value.toString("html") });
  };

  const handleAddKeyword = (keyword) => {
    data.keywords.length < 5 &&
      setData({ ...data, keywords: [...data.keywords, keyword] });
  };

  const handleDeleteKeyword = (i) => {
    setData({
      ...data,
      keywords: data.keywords.filter((tag, index) => index !== i),
    });
  };

  const handleSubmitArticle = async () => {
    if (data.title === "") {
      setError("Please include the article title!");
    } else if (data.content === "") {
      setError("Please include the article content!");
    } else if (data.metaTitle === "") {
      setError("Please include the article meta title!");
    } else if (data.metaDescription === "") {
      setError("Please include the article meta description!");
    } else if (data.image === "") {
      setError("Please include the article image!");
    } else if (data.alt === "") {
      setError("Please include the image alt text!");
    } else if (data.keywords.length === 0) {
      setError("Please include the article keywords!");
    } else {
      setError(undefined);
      setProcessing(true);

      const d = data;

      d.content = d.content.replace(/<a\s+href=/g, '<a target="_blank" href=');
      d.slug = data.metaTitle.toLowerCase().replace(/ /g, "-");

      if (isEdit) {
        d.modifiedDate = moment().format();

        await updateArticle(d.id, d);
        window.location.reload();
        return;
      }

      d.author = auth.currentUser.displayName;
      d.publishDate = moment().format();

      await createArticle(data);

      setProcessing(true);
      window.location.reload();
    }
  };

  return (
    <div
      className="modal fade"
      id="articleModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="newArticleStaticModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content new-article-modal">
          <div className="modal-header">
            <h5 className="modal-title" id="newArticleStaticModal">
              Write a New Article
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              disabled={processing}
            ></button>
          </div>
          <div className="modal-body px-4 py-3">
            <div className="form-group">
              <label htmlFor="newArticleTitle">Title</label>
              <input
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                className="form-control shadow-none"
                id="newArticleTitle"
                placeholder="Article title"
              />
            </div>
            <div className="form-group w-100">
              <label htmlFor="newArticleContent">Content</label>
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
                    ],
                    INLINE_STYLE_BUTTONS: [
                      {
                        label: "Bold",
                        style: "BOLD",
                        className: "custom-css-className",
                      },
                      { label: "Italic", style: "ITALIC" },
                      { label: "Underline", style: "UNDERLINE" },
                    ],
                    BLOCK_TYPE_DROPDOWN: [
                      { label: "Normal", style: "unstyled" },
                      { label: "Heading Large", style: "header-two" },
                      { label: "Heading Medium", style: "header-three" },
                      { label: "Heading Small", style: "header-four" },
                    ],
                    BLOCK_TYPE_BUTTONS: [
                      { label: "UL", style: "unordered-list-item" },
                      { label: "OL", style: "ordered-list-item" },
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
            <div className="form-group">
              <label htmlFor="newArticleMetaTitle">Meta Title</label>
              <input
                type="text"
                value={data.metaTitle}
                onChange={(e) =>
                  setData({ ...data, metaTitle: e.target.value })
                }
                className="form-control shadow-none"
                id="newArticleMetaTitle"
                placeholder="Article meta title (this will be reflected in the blog url)"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newArticleMetaDesc">Meta Description</label>
              <textarea
                type="text"
                value={data.metaDescription}
                onChange={(e) =>
                  setData({ ...data, metaDescription: e.target.value })
                }
                className="form-control shadow-none"
                style={{ resize: "none" }}
                rows={4}
                id="newArticleMetaDesc"
                placeholder="Article meta description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newArticleImgSrc">Image URL</label>
              <input
                type="text"
                value={data.image}
                onChange={(e) => setData({ ...data, image: e.target.value })}
                className="form-control shadow-none"
                id="newArticleImgSrc"
                placeholder="Provide a valid hero image url"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newArticleImgSrc">Image Alt</label>
              <input
                type="text"
                value={data.alt}
                onChange={(e) => setData({ ...data, alt: e.target.value })}
                className="form-control shadow-none"
                id="newArticleImgAlt"
                placeholder="Provide a valid hero image alt"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newArticleContent">Enter keywords</label>
              <ReactTags
                tags={data.keywords}
                separators={[188, 13]}
                handleDelete={handleDeleteKeyword}
                handleAddition={handleAddKeyword}
                allowDragDrop={false}
                placeholder="Add keywords related to the article"
                className="form-control"
                inputFieldPosition="top"
                autocomplete={true}
              />
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
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={processing}
              onClick={handleSubmitArticle}
            >
              {isEdit ? "Update " : "Submit "}
              Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDialog;
