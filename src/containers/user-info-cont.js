import Info from '../components/user-info';
import { withRouter} from 'react-router-dom';
import { selectUserById } from '../selectors';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/users';


const mapStateToProps = (state, props) => {
  let string = props.location.pathname;
  const id = + parseInt(string.replace(/\D+/g,""),10);
  console.log(id)
  return {
    selectUser: selectUserById(state,id)
  }
}
const mapDispatchToProps = { deleteUser }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Info))
