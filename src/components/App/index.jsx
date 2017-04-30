import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import Profile from '../Profile'
import Login from '../Login'
import Header from '../Header'
import styles from './app.css'
import Main from '../Main'
import firebase from 'firebase'
import 'normalize-css'

//esta clase app va a ser el contenerdor de la aplicacion para que sea escalable

class App extends Component {
    constructor () {
        super();
        this.state = {
            user: null
        }

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }


    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
            }
        })
    }


    handleAuth () {
        const provider = new firebase.auth.GithubAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesion`))
            .catch(error => console.error(error.message))
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(() => console.log("Has salido de la sesion"))
            .catch(() => console.error(error.message))
    }


    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <Match exactly pattern="/" render={() => {
                        if (this.state.user) {
                            return (
                                <Main
                                    user={this.state.user}
                                    onLogout={this.handleLogout} />
                            )
                        } else {
                            return (
                                <Login onAuth={this.handleAuth} />
                            )
                        }
                    }} />

                    <Match pattern="/profile" render={() => (
                        <Profile
                            picture={this.state.user.photoURL}
                            username={this.state.user.email.split('@')[0]}
                            emailAdress={this.state.user.email}
                            location={this.state.user.location}

                        />
                    )
                    } />

                    <Match pattern="/user/:username" render={({ params }) => (
                        <Profile
                            displayName={params.username}
                            username={params.username}
                        />
                    )} />


                </div>
            </HashRouter>
        )
    }
}

export default App