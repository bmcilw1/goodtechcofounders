import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ReactMarkdown from "react-markdown";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const AboutPageTemplate = ({
  title,
  introTitle,
  introText,
  content,
  contentComponent,
  aboutImage,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="title">{title}</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-one-third">
                  <div className="title">{introTitle}</div>
                  <ReactMarkdown className="content" source={introText} />
                </div>
                <div className="column">
                  <PreviewCompatibleImage imageInfo={aboutImage} />
                </div>
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  introTitle: PropTypes.string.isRequired,
  introText: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  aboutImage: PropTypes.object.isRequired,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        title={post.frontmatter.title}
        introTitle={post.frontmatter.introTitle}
        introText={post.frontmatter.introText}
        aboutImage={post.frontmatter.aboutImage}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        introTitle
        introText
        aboutImage {
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`;
