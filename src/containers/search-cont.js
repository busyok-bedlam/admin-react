import { connect } from 'react-redux';
import Search from '../components/search';
import { filterUserAction as filterUsers } from '../actions/users';

const mapDispatchToProps = { filterUsers }
export default connect(null,mapDispatchToProps)(Search)
