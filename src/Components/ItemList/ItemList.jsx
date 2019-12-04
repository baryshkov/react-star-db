import React, { Component } from 'react';
import styled from 'styled-components';
import BaseList from '../BaseList/BaseList';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner';

const List = styled(BaseList)`
  width: auto;
`;

const InfoSpan = styled.span`
  padding-left: 1rem;
  float: right;
`;

class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => this.setState({ itemList }));
  }

  renderItems = arr => {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li key={id} onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  };

  render() {
    const { itemList } = this.state;
    let key = 2499;
    return <List>{(itemList && this.renderItems(itemList)) || <Spinner />}</List>;
  }
}

export default ItemList;
