import Popup from '../components/popup';
import { connect } from 'react-redux';
import { addUser } from '../actions/add-user';


const mapDispatchToProps = { addUser }
export default connect(null,mapDispatchToProps)(Popup)
