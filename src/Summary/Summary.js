import React, {Component} from 'react'
import axios from 'axios'

class Summary extends Component {

    constructor(){
        super()
        this.state = {
            students: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3004/students')
            .then(res => {
                console.log(res)
                this.setState({
                    students : res.data
                })
            })
    }


    render() {
        return(
        <div id="page-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Summary Panel</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Basic Table
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Age</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.students.map((student, idx) => {
                                            return  <tr key={idx}>
                                                    <td>{student.id}</td>
                                                    <td>{student.name}</td>
                                                    <td>{student.address}</td>
                                                    <td>{student.age}</td>
                                                </tr>
                                        })}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Summary