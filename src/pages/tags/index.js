import React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "20rem" }}
          >
            <h1 className="title">Tags</h1>
            <ul className="tags are-large">
              {group.map((tag) => (
                <Link
                  className="tag is-link is-large"
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
