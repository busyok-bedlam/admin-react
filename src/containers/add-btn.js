import AddButton from '../components/add-button';
import { connect } from 'react-redux';
import { toggleForm } from '../actions/add-user';


const mapDispatchToProps = {
  toggleForm
}
export default connect(null,mapDispatchToProps)(AddButton)
