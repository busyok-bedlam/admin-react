import React from 'react';
import UsersTable from '../containers/users-list';
import { Route,Switch,withRouter } from 'react-router-dom';


const Info = ({match}) => {
  const {id} = match.params;
  return (
    <div>
      {`Hello ${id}`}
    </div>
  )
}
const InfoItem = withRouter(Info)

const TableWrap = ({match,params}) =>{
  return (
    <div className="table-wrap" >
      <Route path="/users" exact component={UsersTable} />
      <Route path="/users/:id" component={Info} />
    </div>
  )
}

export default TableWrap;
