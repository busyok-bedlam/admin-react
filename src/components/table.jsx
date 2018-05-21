import React,{Component} from "react";
import TableItem from './table-item';
import '../styles/table.css';


class Table extends Component {

    componentDidMount(){
        this.props.getUsers()
    }

    render(){
        const users = this.props.users;
        return (
            <div className="table-wrap">
                <p>TABLE</p>
                <ul className="table">
                    {
                        users.map( user => <TableItem data={user} key={user.id} />)
                    }
                </ul>
            </div>
        )
    }
}

export default Table;
