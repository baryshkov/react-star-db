import React from 'react';
import styled from 'styled-components';
import BaseList from '../BaseList/BaseList';

const List = styled(BaseList)`
  width: auto;
`;

const ItemList = () => {
  return (
    <div className="col-xs-12 col-md-6">
      <List>
        <li>Luke Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Dart Vader</li>
      </List>
    </div>
  );
};

export default ItemList;
