import React, { Component, PropTypes } from 'react'
import MessageList from '../Messagelist'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'
import uuid from 'uuid'
import firebase from 'firebase'

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
            messages: []
        }

        this.handleOpenText = this.handleOpenText.bind(this);
        this.handeCloseText = this.handeCloseText.bind(this);
        this.handleSendText = this.handleSendText.bind(this);
        this.handleFavorites = this.handleFavorites.bind(this);
        this.handleRetweet = this.handleRetweet.bind(this);
        this.handleReplyTweet = this.handleReplyTweet.bind(this);

    }


    componentWillMount() {
        const mensajesRef = firebase.database.ref().child('messages')

        mensajesRef.on('child_added', snapshot => {
            this.setState({
                messages: this.state.messages.concat(snapshot.val()),
                openText: false
            })
        })
    }


    handleRetweet(msgId) {
        let alreadyTweeted = this.state.user.retweets.filter(twt => twt === msgId)

        if (alreadyTweeted.length === 0) {
            let messages = this.state.messages.map(msg => {
                if (msg.id === msgId) {
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

    handleFavorites(msgId) {
        //fav es el elemento actual por el que esta iterando el callback que va por todos y si ese elemento es igual al msgId lo devuelve en un nuevo array
        let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)
        //si el array esta vacio
        if (alreadyFavorited.length === 0) {
            let messages = this.state.messages.map(msg => {
                if (msg.id === msgId) {
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
            date: Date.now(),
            favorites: 0,
            retweets: 0
        }

        const messagesRef = firebase.database().ref().child('messages')
        const messageID = messagesRef.push()
        messageID.set(newMessage)

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