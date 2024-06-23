import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import moment from "moment";

import { Link } from "react-router-dom";

import {
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

import { useSelector } from "react-redux";

import ArticleDialog from "../components/dialogs/article.dialog";

import DeleteDialog from "../components/dialogs/delete.dialog";

import Loader from "../components/loader.component";

import { getAllArticles, updateArticle } from "../services/article.service";

const Blog = () => {
  const currentUser = useSelector((state) => state.currentUser);

  const [data, setData] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [editArticle, setEditArticle] = useState(undefined);
  const [deleteArticle, setDeleteArticle] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await getAllArticles();
      setData(articles);
      if (articles.length > 0) {
        const featured = articles.find((article) => article.featured);
        setFeaturedArticle(featured || articles[0]);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleUpdateFeatured = async (id, featured) => {
    await updateArticle(id, { featured }).then(() => {
      setData((prevData) =>
        prevData.map((article) =>
          article.id === id ? { ...article, featured } : article
        )
      );
    });
  };

  return loading ? (
    <Loader />
  ) : (
    <div id="blogPage">
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
        className="title-box mb-xl-5"
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
          Therapy Blog
          {currentUser !== null && (
            <button
              className="btn btn-plus"
              data-bs-toggle="modal"
              data-bs-target="#articleModal"
            >
              <PlusCircleIcon />
            </button>
          )}
        </motion.h1>
      </motion.div>

      <ArticleDialog
        isEdit={editArticle !== undefined}
        editingArticle={editArticle}
      />
      <DeleteDialog collection={"articles"} item={deleteArticle} />

      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="container col-xl-7 my-5">
          {data.length > 0 ? (
            <div className="row">
              <div className="col-lg">
                <div className="latest-article">
                  <div className="main-img-wrapper">
                    <Link to={`/blog/${featuredArticle.slug}`}>
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <Link to={`/blog/${featuredArticle.slug}`}>
                      <h2>{featuredArticle.title}</h2>
                    </Link>
                    <div className="hstack gap-1 author-wrapper">
                      <div className="author-details">
                        <p className="name">{featuredArticle.author}</p>
                        <p> • </p>
                        <p className="date">
                          {moment(featuredArticle.publishDate).format("lll")}
                        </p>
                      </div>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          featuredArticle.content.substring(0, 200) + "...",
                      }}
                    />
                    {currentUser !== null && (
                      <div className="hstack gap-2 action-btn-wrapper">
                        <button
                          className="btn edit-btn"
                          style={{
                            color: "#599ca4",
                          }}
                          data-tooltip-id="main-tooltip"
                          data-tooltip-content={
                            featuredArticle.featured
                              ? "Featured!"
                              : "Feature this Article?"
                          }
                          onClick={() =>
                            handleUpdateFeatured(
                              featuredArticle.id,
                              !featuredArticle.featured
                            )
                          }
                        >
                          <StarIcon
                            style={{
                              width: 22,
                              fill: featuredArticle.featured
                                ? "#599ca4"
                                : "none",
                            }}
                          />
                        </button>
                        <button
                          className="btn edit-btn"
                          data-tooltip-id="main-tooltip"
                          data-tooltip-content="Edit"
                          data-bs-toggle="modal"
                          data-bs-target="#articleModal"
                          onClick={() => setEditArticle(featuredArticle)}
                        >
                          <PencilIcon />
                        </button>
                        <button
                          className="btn edit-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                          data-tooltip-id="main-tooltip"
                          data-tooltip-content="Delete"
                          onClick={() =>
                            setDeleteArticle({
                              id: featuredArticle.id,
                              name: featuredArticle.title,
                            })
                          }
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {data.length > 1 && (
                <div className="col-md-auto col-lg-5 d-block">
                  {data.slice(1).map((article) => (
                    <div
                      key={article.id}
                      className="latest-article latest-article-mini hstack"
                    >
                      <div className="main-img-wrapper">
                        <Link to={`/blog/${article.slug}`}>
                          <img src={article.image} alt={article.title} />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to={`/blog/${article.slug}`}>
                          <h2>{article.title.substring(0, 36) + "..."}</h2>
                        </Link>
                        <div className="hstack gap-1 author-wrapper">
                          <div className="author-details">
                            <p className="name">{article.author}</p>
                            <p> • </p>
                            <p className="date">
                              {moment(article.publishDate).format("ll")}
                            </p>
                          </div>
                        </div>
                        {currentUser !== null && (
                          <div className="hstack gap-2 action-btn-wrapper">
                            <button
                              className="btn edit-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#articleModal"
                              onClick={() => setEditArticle(article)}
                            >
                              <PencilIcon />
                            </button>
                            <button
                              className="btn edit-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteModal"
                              onClick={() =>
                                setDeleteArticle({
                                  id: article.id,
                                  name: article.title,
                                })
                              }
                            >
                              <TrashIcon />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-center">No articles yet!</p>
          )}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cta mt-xl-5">
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
              Because let’s face it, your journey to wellness is yours alone,
              <br />
              and it’s about time you had someone in your corner to support you
              through it all.
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
                <button className="btn btn-primary">Give a shout!</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
