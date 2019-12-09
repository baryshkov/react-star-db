import React from 'react';
import styled from 'styled-components';

const NavBar = styled.ul`
  list-style: none;
  align-items: center;
  padding-left: 0;
`;

const NavLink = styled.a`
  margin-left: 0.5rem;
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
    <div className="row between-sm container">
      <div className="col-xs-12 col-sm-4 col-md-3">
        <h1>Star DB</h1>
      </div>
      <nav className="col-xs-12 col-sm-8 col-md-6 col-lg-4 row">
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
  );
};

export default AppHeader;
