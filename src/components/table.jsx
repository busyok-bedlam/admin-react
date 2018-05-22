import React,{Component} from "react";
import TableItem from './table-item';
import '../styles/table.css';
import AddButton from '../containers/add-btn';
import { Link } from 'react-router-dom';
import Popup from '../containers/popup-container';


class Table extends Component {
    componentDidMount(){
        this.props.getUsers()
    }
    render(){
        const users = this.props.users;
        const formStatus = this.props.formStatus;
        const list = users && users.map( user => <TableItem data={user} key={user.id} />)
        return (
            <div className="table-pane">
              { formStatus ? <AddButton>&#10007;</AddButton> : <AddButton>&#43;</AddButton>}
              { formStatus && <Popup/> }
              { !formStatus && <Link to="/"> <span className="home-btn">&#8962;</span> </Link>}
              { !formStatus && <ul className="table">{ list }</ul>}
            </div>
        )
    }
}

export default Table;
