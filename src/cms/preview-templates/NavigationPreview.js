import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NavigationPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <div>
        <p> Header moved down due to buttons</p>
        <br />
        <br />
        <br />
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
