import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
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
                displayName: 'Carlos Azaustre',
                onOpenText: false
            }
        }
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
                            //Render del componente login
                        }
                    }}/>

                    <Match pattern="/profile" render={() => {
                        //Render <Profile/>
                    }} />

                    <Match pattern="/user/:username" render={( {params} ) => {
                        //Render <Profile/> pero con otras propiedades pasando params.username
                    }} />
                    
                    
                </div>
            </HashRouter>
        )
    }
}

export default App