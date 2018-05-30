import React from 'react';
import UsersTable from '../containers/users-list';
import { Route,Switch } from 'react-router-dom';
import UserInfo from '../containers/user-info-cont';

const TableWrap = () =>{
  return (
    <div className="table-wrap" >
      <Switch>
        <Route path="/users" exact component={UsersTable} />
        <Route path="/users/:id"  component={UserInfo} />
      </Switch>
    </div>
  )
}

export default TableWrap;
