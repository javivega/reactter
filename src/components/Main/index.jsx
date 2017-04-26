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
                date: Date.now() - 180000,
                retweets: 0,
                favorites: 0
            },
            {
                id: uuid.v4(),
                text: 'Mi primer mensaje',
                picture: 'https://thenextweb.com/files/2010/12/winner1.png',
                displayName: 'Carlos Azaustre',
                username: 'carlosazaustre',
                date: Date.now() - 1800000,
                retweets: 0,
                favorites: 0
            }]
        }

        this.handleOpenText = this.handleOpenText.bind(this);
        this.handeCloseText = this.handeCloseText.bind(this);
        this.handleSendText = this.handleSendText.bind(this);

    }

    handleRetweet(){

    }

    handleFavorites(){
        
    }

    handleOpenText(event) {
        event.preventDefault()
        this.setState({
            openText: true
        })
    }

    handeCloseText(event) {
        event.preventDefault();
        this.setState({
            openText: false
        })
    }

    handleSendText(event) {
        event.preventDefault();
        var newMessage = {
            id: uuid.v4(),
            text: event.target.text.value,
            picture: 'https://thenextweb.com/files/2010/12/winner1.png',
            displayName: this.props.user.displayName,
            username: this.props.user.username,
            date: Date.now()
        }

        this.setState({
            messages: this.state.messages.concat([newMessage]),
            openText: false
        })
    }

    renderOpenText() {
        if (this.state.openText) {
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handeCloseText}
                />
            )
        }
    }

    render() {
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavorites={this.handleFavorites}
                />
            </div>
        )
    }
}

export default Main