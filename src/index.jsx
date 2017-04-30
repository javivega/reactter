import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import firebase from 'firebase'

//Este fichero es el punto de entrada de mi app

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBFeaQAGv1PoPRkZ9ZaB20q_YgQQ8UUwSE",
    authDomain: "reactter-5b524.firebaseapp.com",
    databaseURL: "https://reactter-5b524.firebaseio.com",
    projectId: "reactter-5b524",
    storageBucket: "reactter-5b524.appspot.com",
    messagingSenderId: "70199970276"
});


render(<App />, document.getElementById('root'))

