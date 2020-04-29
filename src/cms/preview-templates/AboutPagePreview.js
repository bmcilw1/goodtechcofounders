import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <AboutPageTemplate
      title={data.title}
      content={widgetFor("body")}
      introTitle={data.introTitle}
      introText={data.introText}
      aboutImage={{
        image: getAsset(data.aboutImage.image).toString(),
        alt: data.aboutImage.alt,
      }}
    />
  );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default AboutPagePreview;
