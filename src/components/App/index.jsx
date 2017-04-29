import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import Profile from '../Profile'
import Login from '../Login'
import Header from '../Header'
import styles from './app.css'
import Main from '../Main'
import 'normalize-css'

//esta clase app va a ser el contenerdor de la aplicacion para que sea escalable

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }

        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(){
        console.log('Auth')
    }


    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <Match exactly pattern="/" render={() => {
                        if(this.state.user){
                            return(
                                <Main user={this.state.user} />
                            )
                        } else {
                            return(
                                <Login onAuth={this.handleAuth}/>
                            )
                        }
                    }}/>

                    <Match pattern="/profile" render={() => (
                        <Profile
                            picture={this.state.user.photoURL}
                            username={this.state.user.email.split('@')[0]}
                            emailAdress={this.state.user.email}
                            location={this.state.user.location}

                        />
                        )
                    } />

                    <Match pattern="/user/:username" render={( {params} ) => (
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