import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";

import { Helmet } from "react-helmet";

import moment from "moment";

import { getArticle } from "../services/article.service";

import Loader from "../components/loader.component";

import { HomeIcon } from "@heroicons/react/24/outline";

const Article = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  const [article, setArticle] = useState(undefined);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticle(slug);

      if (!data) {
        navigate("/blog");
        return;
      }

      setArticle(data);
      setLoading(false);
    };

    fetchData();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line
  }, [slug]);

  return loading ? (
    <Loader />
  ) : (
    <div className="min-vh-100 single-article" style={{ marginTop: 92 }}>
      <div id="articlePage">
        <Helmet>
          <title>{article.metaTitle} | Ashley Franklin Wellness</title>
          <meta name="description" content={article.metaDescription} />
        </Helmet>
        <section className="d-flex flex-column justify-content-center align-items-center">
          <div className="img-wrapper">
            <img src={article.image} alt={article.alt} />
          </div>
          <div className="container col-xl-7 my-xl-5 my-3 content">
            <div className="d-flex gap-2 breadcrumb">
              <Link to="/">
                <HomeIcon width={18} />
              </Link>
              <p> / </p>
              <Link to="/blog">Blog</Link>
              <p> / </p>
              <p>{article.title}</p>
            </div>
            <h1 className="mb-3">
              {article.title.replace(/((?:.*?\s){5}.*?)\s/g, "$1\n")}
            </h1>
            <div className="author-details mb-4">
              <p className="name">{article.author}</p>
              <p> • </p>
              <p className="date">{moment(article.publishDate).format("ll")}</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: article.content }} />
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
                and it’s about time you had someone in your corner to support
                you through it all.
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
    </div>
  );
};

export default Article;
