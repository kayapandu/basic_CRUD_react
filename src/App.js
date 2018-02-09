import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'
import Summary from './Summary/Summary'
import FormApp from './FormApp/FormApp'
import ReactFireMixin from 'reactfire' 
import Firebase from 'firebase'
import {init as firebaseInit} from './firebase'

class App extends Component {

  constructor(){
    super()
    firebaseInit()
  }

  render() {
    return (
    <div>
      <Header />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/form" component={FormApp} />
    </div>
    )
  }
}

export default App;
