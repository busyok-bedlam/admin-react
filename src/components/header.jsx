import React from 'react';
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = ({ history }) => {
const toGo = e => {
  e.preventDefault();
  history.push("/users");
}
return (
    <div className="Header">
      <Link to="/">
          <i className="fas fa-home"></i>
      </Link>
      <div>
        <span onClick={ toGo } >Users</span>
      </div>
      <div>Search</div>
    </div>
  )
}
export default Header;
