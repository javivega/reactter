import React, { Component, PropTypes } from 'react'
import MessageList from '../Messagelist'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'
import uuid from 'uuid'

const propTypes = {
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired
}


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: [] }),
            openText: false,
            userNameToReply: '',
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
        this.handleFavorites = this.handleFavorites.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleReplyTweet = this.handleReplyTweet.bind(this);

    }

    handleRetweet(msgId){
        let alreadyTweeted = this.state.user.retweets.filter(twt => twt === msgId)

        if(alreadyTweeted.length === 0){
            let messages = this.state.messages.map(msg => {
                if(msg.id === msgId){
                    msg.retweets++
                }
                return msg
            })

            let user = Object.assign({}, this.state.user)
            user.retweets.push(msgId)

            this.setState({
                user,
                messages
            })
        }
    }

    handleFavorites(msgId){
        //fav es el elemento actual por el que esta iterando el callback que va por todos y si ese elemento es igual al msgId lo devuelve en un nuevo array
        let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)
        //si el array esta vacio
        if(alreadyFavorited.length === 0){
            let messages = this.state.messages.map(msg => {
                if(msg.id === msgId){
                    msg.favorites++
                }
                return msg
            })

            let user = Object.assign({}, this.state.user)
            user.favorites.push(msgId)

            this.setState({
                user,
                messages
            })
        }
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

    handleReplyTweet(msgId, userNameToReply) {
        this.setState({
            openText: true,
            userNameToReply
        })
    }

    renderOpenText() {
        if (this.state.openText) {
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handeCloseText}
                    userNameToReply={this.state.userNameToReply}
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
                    onLogout={this.props.onLogout}
                />
                {this.renderOpenText()}
                <MessageList
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavorites={this.handleFavorites}
                    onReplyTweet={this.handleReplyTweet}
                />
            </div>
        )
    }
}

Main.propTypes = propTypes

export default Main