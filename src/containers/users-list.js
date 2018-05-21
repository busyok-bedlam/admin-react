import { connect } from 'react-redux';
import Table from '../components/table';
import { getUsers } from '../actions/users';
import { selectUsers } from '../selectors'

const mapStateToProps = state => ({
  users: selectUsers(state)
})
const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
})

const UsersTable = connect(mapStateToProps,mapDispatchToProps)(Table);
export default UsersTable;
