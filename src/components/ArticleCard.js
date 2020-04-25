import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export class ArticleCard extends React.Component {
  render() {
    const { article } = this.props;

    return (
      <article className="tile is-child box notification">
        <header className="columns">
          {article.frontmatter.featuredimage ? (
            <div className="column is-one-third">
              <PreviewCompatibleImage
                imageInfo={{
                  image: article.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${article.frontmatter.title}`,
                }}
              />
            </div>
          ) : null}
          <p className="column">
            <Link
              className="title has-text-primary is-size-4"
              to={article.fields.slug}
            >
              {article.frontmatter.title}
            </Link>
            <br />
            <span className="subtitle is-size-5">
              {article.frontmatter.date}
            </span>
          </p>
        </header>
        <p>
          {article.excerpt}
          <br />
          <br />
          <Link
            className="button is-primary is-outlined"
            to={article.fields.slug}
          >
            Keep Reading →
          </Link>
        </p>
      </article>
    );
  }
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    excerpt: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      featuredpost: PropTypes.bool,
      featuredimage: PropTypes.object,
    }),
  }).isRequired,
};
