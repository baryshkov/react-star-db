import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ left, right }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">{left}</div>
        <div className="col-xs-12 col-md-6">{right}</div>
      </div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default Row;
