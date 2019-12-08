import React from 'react';

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

export default Row;
