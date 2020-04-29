import React, { Component } from 'react';
import './list.css'

class List extends Component {
    render(){
        const { employees } = this.props;
        return (
            <div className="list">
                <div className="row header">
                    <div className="cell">First Name</div>
                    <div className="cell">Email</div>
                    <div className="cell">City</div>
                    <div className="cell">State</div>
                </div>
                <div className="content">
                    {
                        employees.map(employee=>{
                            const { id, first_name, last_name, city, state } = employee;
                            return (
                            <div key={id} className="row">
                                <div className="cell">{first_name}</div>
                                <div className="cell">{last_name}</div>
                                <div className="cell">{city}</div>
                            <div className="cell">{state}</div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default List