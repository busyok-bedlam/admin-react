import React from 'react';

const AddButton = ({toggleForm,children}) => {
  const clickHandler = e => {
    e.preventDefault();
    toggleForm();
  }
  return (
    <div className="add-btn-wrap">
      <span
        className="add-btn"
        onClick={clickHandler}
      >{children}</span>
    </div>
  )
}

export default AddButton;
