import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import TableWrap from './table-wrap';
import Sidebar from './sidebar';

const Home = () => (
  <div>Home</div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Sidebar} />
        <Route path="/users" component={TableWrap} />
      </div>
    );
  }
}
export default App;

//
