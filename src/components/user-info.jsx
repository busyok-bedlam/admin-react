import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/user-card.css'

const Info = ({ selectUser,deleteUser,history }) => {
  const { id,firstName,lastName,age,progress,status,visits } = selectUser;
  const deleteHandler = e => {
    e.preventDefault();
    history.goBack();
    deleteUser(id);

  }
    return (
      <div>
          <div className="user-card">
            <div className="user-id">id: {id}</div>
            <div className="user-firstname">firstName: {firstName}</div>
            <div className="user-lastname">lastName: {lastName}</div>
            <div className="user-age">age: {age}</div>
            <div className="user-visits">visits: {visits}</div>
            <div className="user-progress">progress: {progress}</div>
            <div className="user-status">status: {status}</div>
            <Link to="/users">GO BACK</Link>
            <span className="delete-btn" onClick={deleteHandler}>DEL</span>
          </div>

      </div>
    )
}
export default Info;
