import React from 'react';
import styled from 'styled-components';
import BaseList from '../BaseList/BaseList';

const List = styled(BaseList)`
  width: auto;
`;

const InfoSpan = styled.span`
  padding-left: 1rem;
  float: right;
`;

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li key={id} onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return <List>{items}</List>;
};

export default ItemList;
