import React from "react";
import PropTypes from "prop-types";
import { ArticlePageTemplate } from "../../templates/article-page";

const ArticlePagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  const tags = entry.getIn(["data", "tags"]);
  return (
    <ArticlePageTemplate
      content={widgetFor("body")}
      description={data.description}
      tags={tags && tags.toJS()}
      title={data.title}
      slug={data.fields.slug}
      featuredImage={getAsset(data.image).toString()}
      date={data.date}
    />
  );
};

ArticlePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default ArticlePagePreview;
