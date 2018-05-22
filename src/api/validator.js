const validate = ({ firstName,lastName,age,visits,status,progress }) => {
  if( firstName && lastName && age && visits && status && progress ) return true;
}

export default validate;
