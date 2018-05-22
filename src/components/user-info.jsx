import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import { selectUserById } from '../selectors';
import { connect } from 'react-redux';

const Info = ({ selectUser,deleteUser,history }) => {
const { id,firstName,lastName,age,progress,status,visits } = selectUser;
const deleteHandler = e => {
  e.preventDefault();
  history.goBack();
  deleteUser(id);
  console.log("DELETING USER .....")
}
  return (
    <div>
        <div className="user-card">
          <div className="user-id">{id}</div>
          <div className="user-firstname">{firstName}</div>
          <div className="user-lastname">{lastName}</div>
          <div className="user-age">{age}</div>
          <div className="user-visits">{visits}</div>
          <div className="user-progress">{progress}</div>
          <div className="user-status">{status}</div>
        </div>
        <Link to="/users">GO BACK</Link>
        <span className="delete-btn" onClick={deleteHandler}>DEL</span>
    </div>
  )
}
export default Info;
