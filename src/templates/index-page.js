import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import ArticlesRoll from "../components/ArticlesRoll";

export const IndexPageTemplate = ({ intro, articlesSection }) => (
  <div>
    <section className="hero is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{intro.title}</h1>
          <h3 className="subtitle">{intro.subtitle}</h3>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="column is-12">
          <div className="subtitle has-text-weight-semibold is-size-2">
            {articlesSection.headerText}
          </div>
          <ArticlesRoll />
          <div className="has-text-centered">
            <Link
              className="button is-medium is-primary"
              to={articlesSection.readMoreButton.path}
            >
              {articlesSection.readMoreButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  intro: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  articlesSection: PropTypes.shape({
    headerText: PropTypes.string,
    readMoreButton: PropTypes.shape({
      text: PropTypes.string,
      path: PropTypes.string,
    }),
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        intro={frontmatter.intro}
        articlesSection={frontmatter.articlesSection}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      intro: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
      }),
      articlesSection: PropTypes.shape({
        headerText: PropTypes.string,
        readMoreButton: PropTypes.shape({
          text: PropTypes.string,
          path: PropTypes.string,
        }),
      }),
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      html
      frontmatter {
        intro {
          title
          subtitle
        }
        articlesSection {
          headerText
          readMoreButton {
            text
            path
          }
        }
      }
    }
  }
`;
