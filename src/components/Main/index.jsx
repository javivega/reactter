import React, { Component } from 'react'
import MessageList from '../Messagelist'

class Main extends Component {
    constructor(){
        super();
        this.state = {
            messages: [{
                text: 'Mi primer mensaje'
            }]
        }
    }

    render(){
        return(
            <MessageList messages={this.state.messages} />
        )
    }
}

export default Main