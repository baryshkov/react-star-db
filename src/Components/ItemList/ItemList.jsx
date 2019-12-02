import React, { Component } from 'react';
import styled from 'styled-components';
import BaseList from '../BaseList/BaseList';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner';

const List = styled(BaseList)`
  width: auto;
`;

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    characters: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(characters => this.setState({ characters }));
  }

  renderItems = arr => {
    return arr.map(({ id, name }) => (
      <li key={id} onClick={() => this.props.onItemSelected(id)}>
        {name}
      </li>
    ));
  };

  render() {
    const { characters } = this.state;
    let key = 2499;
    return <List>{(characters && this.renderItems(characters)) || <Spinner />}</List>;
  }
}

export default ItemList;
