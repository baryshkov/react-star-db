import styled from 'styled-components';

const BaseList = styled.ul`
  list-style: none;
  padding: 1rem;
  margin-top: 0;
  width: 250px;
  background-color: #5a5a5a;
  border-radius: 3px;

  li:not(:last-of-type) {
    border-bottom: 1px solid gray;
    padding-bottom: 0.2rem;
  }
  li:not(:last-of-type) {
    margin-bottom: 0.4rem;
  }
`;

export default BaseList;
