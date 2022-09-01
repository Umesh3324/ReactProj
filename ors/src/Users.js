import React from 'react';
import { Table } from 'react-bootstrap';

class Users extends React.Component {
    constructor() {
        super();
        this.userList = [
            { "id": 1, "name": "One" },
            { "id": 2, "name": "Two" },
            { "id": 3, "name": "Three" }
        ]
    }
    render() {
        return (
            <div class="col-sm-4">
                
            <div className="container mt-3">
               
                <table className="table">
                <h4 align='left'> User List </h4>
               <table className="table-sm">
               
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    {
                        this.userList.map((ele) => (
                            <tbody>
                            <tr>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                            </tr>
                            </tbody>
                        ))
                    }
                    </table>
                </table>
                
                </div>
            </div>
        );
    }
}
export default Users
