import React, { Component } from 'react'
import ListStudent from '../Components/ListStudent'
import axios from 'axios'

class FormStudent extends Component {
    constructor(){
        super()
        this.state = {
            currentStudentName : "",
            currentStudentAddress : "",
            currentStudentAge : ""
        }
    }

    addNewStudent(){

        let name = this.state.currentStudentName
        let address = this.state.currentStudentAddress
        let age = this.state.currentStudentAge


        //this.props.addStudent(dataStudent)
        axios.post('http://localhost:3004/students', { name, address, age })
            .then(res => {
                console.log(res)
            })

    }


    render() {
        return (
            <div className="panel-body">
                <div className="col-lg-6">
                        <div className="form-group">
                            <label>Name : {this.state.currentStudentName } </label>
                            <input 
                                type="text"
                                className="form-control"
                                onChange={(e) => this.setState({ currentStudentName: e.target.value })}/>
                            <p className="help-block">Set Name</p>
                        </div>
                        <div className="form-group">
                            <label>Address : {this.state.currentStudentAddress } </label>
                            <input 
                                type="text"
                                className="form-control"
                                onChange={(e) => this.setState({ currentStudentAddress: e.target.value })}/>
                            <p className="help-block">Set Address</p>
                        </div>
                        <div className="form-group">
                            <label>Age : {this.state.currentStudentAge } </label>
                            <input 
                                type="text"
                                className="form-control"
                                onChange={(e) => this.setState({ currentStudentAge: e.target.value })}/>
                            <p className="help-block">Set Age</p>
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-default"
                            onClick={ () => this.addNewStudent()}
                            >Submit Button</button>
                        <button
                            type="reset"
                            className="btn btn-default"
                            onClick={ () => this.props.clearStudent()}
                            >Reset Button</button>
                </div>
            </div>

        )
    }
}

export default FormStudent;