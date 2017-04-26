import React, { Component } from 'react'
import Message from '../Message'
import styles from './messagelist.css'
class MessageList extends Component {
    constructor(props) {
        super(props);

        this.onFavorites = this.onFavorites.bind(this);
        this.onRetweet = this.onRetweet.bind(this);
    }

    render() {
        return (
            <div className={styles.root}>
                {this.props.messages.map(msg => {
                    return (
                        <Message
                            key={msg.id}
                            text={msg.text}
                            picture={msg.picture}
                            displayName={msg.displayName}
                            username={msg.username}
                            date={msg.date}
                            numRetweets={msg.retweets}
                            numFavorites={msg.favorites}
                            onRetweet={() => this.props.onRetweet(msg.id)}
                            onFavorites={() => this.props.onFavorites(msg.id)}
                        />
                    )
                }).reverse()}
            </div>
        );
    }
}

export default MessageList;