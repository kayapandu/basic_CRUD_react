import React, { Component } from 'react';

class ListStudent extends Component{


    render(){
        return(
            <div>
            <h2> Students :  </h2>
            <ul>
            {this.props.students.map((student, idx) => {
                return <li key={idx} > <h3>Nama : {student.name}, Address : {student.address},  Age : {student.age} </h3> </li>
            })}
            </ul>
            </div>
        );
    }
}

export default ListStudent;