import React, {Component} from 'react'
import FormStudent from '../Components/FormStudent';
import ListStudent from '../Components/ListStudent';

class FormApp extends Component {
    //STATE
    constructor(){
        super()
        this.state = {
            students: [{
                name    : 'Jhand Dha',
                address : 'Bandung',
                age     : 30
            }],
            // students:['Jhan Dha'],
            currentStudentName: ''
        }
    }

    addStudent(dataStudent){
        //console.log(dataStudent)
        let currentStudents = this.state.students
        let newStudent = dataStudent
        
        let newArray = currentStudents.concat(newStudent)
        //currentStudents.push(newStudent)
        console.log(newArray)
        this.setState({
            students: newArray
        })
        
    }

    clearStudent(){
        this.setState({
            students: []
        })
    }


    render(){
        return(
        <div id="page-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Dashboard</h1>
                </div>
            </div>
            <div className="row">
                <FormStudent addStudent={ (dataStudent) => this.addStudent(dataStudent) } clearStudent={() => this.clearStudent() }/>
            </div>
        </div>
        )
    }
}

export default FormApp