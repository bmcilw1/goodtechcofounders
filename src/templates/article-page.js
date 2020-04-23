import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ArticlePageTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <section className="section">
        {helmet || ""}
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/articles">All Articles</Link>
                  </li>
                  <li className="is-active">
                    <Link aria-current="page" to="/articles">
                      {title}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        {helmet || ""}
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p>{description}</p>
                <PostContent content={content} />
              </div>
              {tags && tags.length ? (
                <div className="container article-tags">
                  <div className="title">Tags</div>
                  <div className="tags are-medium">
                    {tags.map((tag) => (
                      <Link
                        key={`/tags/${kebabCase(tag)}/`}
                        className="tag is-primary"
                        to={`/tags/${kebabCase(tag)}/`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ArticlePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const Article = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArticlePageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Article">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Article;

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
