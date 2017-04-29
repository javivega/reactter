import React, { Component, PropTypes } from 'react';
import styles from './message.css'
import { Link } from 'react-router'
import moment from 'moment'

const propTypes = {
    date: PropTypes.number.isRequired,
    numRetweets: PropTypes.number.isRequired,
    numFavorites: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onFavorites: PropTypes.func.isRequired,
    onPressFavorites: PropTypes.func.isRequired,
    onPressRetweet: PropTypes.func.isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired
}

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressFavorite: false,
            pressRetweet: false
        }

        this.onPressFavorites = this.onPressFavorites.bind(this);
        this.onPressRetweet = this.onPressRetweet.bind(this);
    }


    onPressRetweet() {
        onRetweet()
        this.setState({
            pressRetweet: true
        })
    }

    onPressFavorites() {
        onFavorites()
        this.setState({
            pressFavorite: true
        })
    }

    render() {
        let dateFormat = moment(date).fromNow()
        let userLink = `/user/${username}`

        return (

            <div className={styles.root}>
                <div className={styles.user}>
                    <Link to={userLink}>
                        <figure>
                            <img className={styles.avatar} src={picture} alt="" />
                        </figure>
                    </Link>
                    <span className={styles.displayName}>{displayName}</span>
                    <span className={styles.username}>{username}</span>
                    <span className={styles.date}>{dateFormat}</span>
                </div>
                <h3>{text}</h3>
                <div className={styles.buttons}>
                    <div className={styles.icon}
                        onClick={onReplyTweet}>
                        <span className='fa fa-reply'></span>
                    </div>
                    <div onClick={this.onPressRetweet} className={(this.state.pressRetweet) ? styles.rtGreen : ''}>
                        <span className='fa fa-retweet'></span>
                        <span className={styles.num}>{numRetweets}</span>
                    </div>
                    <div onClick={this.onPressFavorites} className={(this.state.pressFavorite) ? styles.favYellow : ''}>
                        <span className='fa fa-star'></span>
                        <span className={styles.num}>{numFavorites}</span>
                    </div>
                </div>

            </div>

        )
    }
}

Message.propTypes = propTypes

export default Message;