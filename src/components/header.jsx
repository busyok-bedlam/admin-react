import React from 'react';
import "../styles/header.css";
import { Link } from "react-router-dom";
import Search from './search';

const Header = ({ history }) => {
const toGo = e => {
  e.preventDefault();
  history.push("/users");
}
return (
    <div className="Header">
      <Link className="home-div" to="/">
          <i className="fas fa-home"></i>
      </Link>
      <div className="users-btn" onClick={ toGo } >Users </div>
      <Search />
    </div>
  )
}
export default Header;
