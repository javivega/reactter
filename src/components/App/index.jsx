import React, { Component } from 'react'
import Header from '../Header'
import styles from './app.css'
import Main from '../Main'
import 'normalize-css'

//esta clase app va a ser el contenerdor de la aplicacion para que sea escalable

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                photoURL: 'https://thenextweb.com/files/2010/12/winner1.png',
                email: 'miguel@gmail.com',
                onOpenText: false
            }
        }
    }


    render() {
        return (
            <div>
                <Header />
                <Main user={this.state.user}/>
            </div>
        )
    }
}

export default App