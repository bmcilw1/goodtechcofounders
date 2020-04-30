import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NavigationPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <div>
        <Navbar />
        <div className="hero">
          <p className="title hero-body"> Header moved down due to buttons</p>
        </div>
        <div className="section">
          <p> Some filler content here for the body.</p>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

NavigationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NavigationPreview;
