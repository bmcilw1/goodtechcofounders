import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";

const NavigationPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Navbar />
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
