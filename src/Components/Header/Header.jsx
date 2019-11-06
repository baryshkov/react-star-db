import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Header.css';

const Header = styled.header`
  background-color: #242424;
`;

const NavBar = styled.ul`
  list-style: none;
  align-items: center;
`;

const NavLink = styled.a`
  margin-left: 1rem;
  padding: 0.5rem;
  color: green;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 2px;

  :hover {
    background-color: #5a5a5a;
  }
`;

const AppHeader = () => {
  return (
    <Header>
      <div className="row container">
        <div className="col-xs-12 col-sm-6 col-md-6 bgc">
          <h1>Star DB</h1>
        </div>
        <nav className="col-xs-12 col-sm-6 col-md-6 bgc-2 row">
          <NavBar className="row">
            <li>
              <NavLink href="#">People</NavLink>
            </li>
            <li>
              <NavLink href="#">Planets</NavLink>
            </li>
            <li>
              <NavLink href="#">Starships</NavLink>
            </li>
          </NavBar>
        </nav>
      </div>
    </Header>
  );
};

export default AppHeader;
