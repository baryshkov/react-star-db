import styled from 'styled-components';

const BaseList = styled.ul`
  list-style: none;
  margin-top: 0;
  min-width: 250px;
  background-color: #5a5a5a;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 0;

  li {
    padding: 1rem;
  }
  li:hover {
    background-color: gray;
  }
  li:not(:last-of-type) {
    border-bottom: 1px solid gray;
  }
  
  li:not(:last-of-type) {
    // margin-bottom: 0.4rem;
  }
`;

export default BaseList;
