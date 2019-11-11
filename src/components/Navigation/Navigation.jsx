import React from "react";
import { NavLink } from "react-router-dom";
import GoogleAuth from '../GoogleAuth'

import "./Navigation.css";
const Navigation = props => {

  return (
    <nav className="main-nav">
      <ul className="nav-items">
        <li>
          <NavLink  exact to="/">
            Streamy
          </NavLink>
        </li>
        <li>
          <NavLink  to="/streams/new">
            Create Stream
          </NavLink>
        </li>
      </ul>

      {props.isAuthenticated ? (
        <ul className="auth-menu">
          <li>
            <NavLink to="/" className="logout-button" onClick={props.onLogout}>
              Logout RaseL
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="auth-menu">
          <li><GoogleAuth/></li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
