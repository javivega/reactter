import React, { Component } from 'react'
import MessageList from '../Messagelist'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'
import uuid from 'uuid'


class Main extends Component {
    constructor() {
        super();
        this.state = {
            openText: false,
            messages: [{
                id: uuid.v4(),
                text: 'Mi primer mensaje',
                picture: 'https://thenextweb.com/files/2010/12/winner1.png',
                displayName: 'Carlos Azaustre',
                username: 'carlosazaustre',
                date: Date.now() - 180000
            },
            {
                id: uuid.v4(),
                text: 'Mi primer mensaje',
                picture: 'https://thenextweb.com/files/2010/12/winner1.png',
                displayName: 'Carlos Azaustre',
                username: 'carlosazaustre',
                date: Date.now() - 1800000
            }]
        }
    }

    handleOpenText(event) {
        event.preventDefault()
        this.setState({
            openText: true
        })
    }

    renderOpenText() {
        if (this.state.openText) {
            return <InputText />
        }
    }

    render() {
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText.bind(this)}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main