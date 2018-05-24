import React, { Component } from 'react';
import { Route } from "react-router-dom";
import TableWrap from '../components/table-wrap';
import Header from "../containers/header-cont";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/users" component={TableWrap} />
      </div>
    );
  }
}
export default App;

//
