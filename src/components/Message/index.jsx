import React, { Component } from 'react';
import styles from './message.css'
import moment from 'moment'

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressFavorite: false,
            pressRetweet: false
        }

        this.onPressFavorites = this.onPressFavorites.bind(this);
        this.onPressRetweet = this.onPressRetweet.bind(this);
    }


    onPressRetweet(){
        this.props.onReTweet()
        this.setState({
            pressFavorite: true
        })
    }

    onPressFavorites(){
        this.props.onFavorites()
        this.setState({
            pressRetweet: true
        })
    }

    render() {
        let dateFormat = moment(this.props.date).fromNow()

        return (

            <div className={styles.root}>
                <div className={styles.user}>
                    <figure>
                        <img className={styles.avatar} src={this.props.picture} alt="" />
                    </figure>
                    <span className={styles.displayName}>{this.props.displayName}</span>
                    <span className={styles.username}>{this.props.username}</span>
                    <span className={styles.date}>{dateFormat}</span>
                </div>
                <h3>{this.props.text}</h3>
                <div className={styles.buttons}>
                    <div className={styles.icon}>
                        <span className='fa fa-reply'></span>

                    </div>
                    <div onClick={this.onPressRetweet} className={(this.state.pressRetweet) ? style.rtGreen : ''}>
                        <span className='fa fa-retweet'></span>
                        <span className={styles.num}>{this.props.numRetweets}</span>
                    </div>
                    <div onClick={this.onPressFavorites} className={(this.state.pressFavorite) ? style.favYellow : ''}>
                        <span className='fa fa-star'></span>
                        <span className={styles.num}>{this.props.numFavorites}</span>
                    </div>
                </div>

            </div>

        );
    }
}

export default Message;