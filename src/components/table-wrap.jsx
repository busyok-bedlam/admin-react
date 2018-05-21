import React from 'react';
import UsersTable from '../containers/users-list';
import { Route } from 'react-router';
import { withRouter } from 'react-router';


const Info = ({match,params}) => {
  return (
    <div>
      { `item ${match.params.id}`}
    </div>
  )
}
const InfoRout = withRouter(Info)

const TableWrap = ({match,params}) =>{
  const link = `${match.path}/:id`
  return (
    <div className="table-wrap" >
      <Route to={match.path} component={UsersTable} />
      <Route exact to="/users/:id" component={InfoRout}>
    </div>
  )
}

export default TableWrap;
