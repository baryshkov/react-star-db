import React from 'react';
import styled from 'styled-components';
import BaseList from '../BaseList/BaseList';

const List = styled(BaseList)`
  width: auto;
`;

const ItemList = () => {
  return (
    <List>
      <li>Luke Skywalker</li>
      <li>Anakin Skywalker</li>
      <li>Dart Vader</li>
    </List>
  );
};

export default ItemList;
