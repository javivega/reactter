import React, { Component } from 'react'
import MessageList from '../Messagelist'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            messages: [{
                text: 'Mi primer mensaje',
                picture: 'https://thenextweb.com/files/2010/12/winner1.png',
                displayName: 'Carlos Azaustre',
                username: 'carlosazaustre',
                date: Date.now() - 180000
            },
            {
                text: 'Mi primer mensaje',
                picture: 'https://thenextweb.com/files/2010/12/winner1.png',
                displayName: 'Carlos Azaustre',
                username: 'carlosazaustre',
                date: Date.now() - 1800000
            }]
        }
    }

    render() {
        return (
            <MessageList messages={this.state.messages} />
        )
    }
}

export default Main