import * as firebase from 'firebase'
let database

export const init = () => {
  let config = {
    apiKey: "AIzaSyD2z3SbKBy0fOoPauh5q0Si2NIV2PeQrfY",
    authDomain: "fir-crud-1899c.firebaseapp.com",
    databaseURL: "https://fir-crud-1899c.firebaseio.com",
    projectId: "fir-crud-1899c",
    storageBucket: "fir-crud-1899c.appspot.com",
    messagingSenderId: "515192721485"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}