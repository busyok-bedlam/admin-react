import React from "react";
import { Link } from 'react-router-dom'
const Sidebar = () => (
  <Link to="/users">
    <div className="sidebar">
      <p>Go to the list</p>
    </div>
  </Link>
)


export default Sidebar;
