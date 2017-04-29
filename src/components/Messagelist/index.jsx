import React, { Component, PropTypes} from 'react'
import Message from '../Message'
import styles from './messagelist.css'

const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onFavorites: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired
}

class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                {messages.map(msg => {
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
                            onRetweet={() => onRetweet(msg.id)}
                            onFavorites={() => onFavorites(msg.id)}
                            onReplyTweet={() => onReplyTweet(msg.id, msg.username)}
                        />
                    )
                }).reverse()}
            </div>
        );
    }
}

export default MessageList;