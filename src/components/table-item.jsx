import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/table-item.css';
import { withRouter } from 'react-router';

const TableItem = ({data,match, location, history}) => {
  const { id,age,progress,firstName,lastName,status,visits} = data;
  const link = `${match.path}/${id}`;
  let toGo = () => {
    history.push(`/users/${id}`)
  }
  return (
      <div className="table-row" onClick={toGo}>
        <div className="user-id">{id}</div>
        <div className="user-firstname">{firstName}</div>
        <div className="user-lastname">{lastName}</div>
        <div className="user-age">{age}</div>
        <div className="user-visits">{visits}</div>
        <div className="user-progress">{progress}</div>
        <div className="user-status">{status}</div>
      </div>
  )

}

export default withRouter(TableItem);
