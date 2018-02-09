import axios from 'axios'

function getStudents(){
    return axios.get('http://localhost:3004/students')
}