import React from 'react';
import styled from 'styled-components';

const Indicator = styled.div`
  padding: 2rem;
  color: darkorange;
  text-align: center;
  line-height: 1.6rem;
  span {
    display: block;
  }
  span:first-of-type {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

const ErrorHeading = styled.span`
  display: block;
  font-size: 2rem;
`;

const ErrorIndicator = () => {
  return (
    <Indicator>
      <ErrorHeading>BOOM!</ErrorHeading>
      <span>something has gone terribly wrong!</span>
      <span>(but we already sent droids to fix it)</span>
    </Indicator>
  );
};

export default ErrorIndicator;
