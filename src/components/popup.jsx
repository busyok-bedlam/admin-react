import React from 'react';
import validate from '../api/validator';
import "../styles/popup.css"


const Popup = ({ addUser }) => {
  let nameInput = null,
  lastNameInput = null,
  ageInput = null,
  visitsInput = null,
  progressInput = null,
  statusInput = null
  const submitHandler = e => {
    e.preventDefault();
    const user = {
      firstName: nameInput.value,
      lastName: lastNameInput.value,
      age:  +ageInput.value,
      visits:  +visitsInput.value,
      progress:  +progressInput.value,
      status: statusInput.value
    }
    if (validate(user)) {
      addUser(user);
    }

  }

  return (
    <div className="popup-wrap">
      <form className="popup-form" onSubmit={submitHandler} >
        <input type="text" ref={ node => nameInput = node} className="name-input" placeholder="Enter name" />
        <input type="text" ref={ node => lastNameInput = node}  className="lastname-input" placeholder="Enter lastname"  />
        <input type="text" ref={ node => ageInput = node}  className="age-input" placeholder="Enter age"  />
        <input type="text" ref={ node => visitsInput = node}  className="visits-input"  placeholder="Enter visits" />
        <input type="text" ref={ node => progressInput = node}  className="progress-input" placeholder="Enter progress"  />
        <input type="text" ref={ node => statusInput = node}  className="status-input" placeholder="Enter status"  />
        <input type="submit" name="" value="SEND" />
      </form>
    </div>
  )
}

export default Popup
