import React, { Component } from 'react';
import styles from './profile.css'

class Profile extends Component {
    render() {
        return (
            <div className={styles.root}>
                <img className={styles.avatar} src={this.props.picture} alt="" />
                <span className={styles.name}>{this.props.username}</span>
                <ul className={styles.data}>
                    <li>
                        <span className="fa fa-user"></span>{this.props.username}
                    </li>
                    <li>
                        <span className="fa fa-envelope"></span>{this.props.emailAdress}
                    </li>
                    <li>
                        <span className="fa fa-map-marker"></span>{this.props.location}
                    </li>


                </ul>


            </div>
        );
    }
}

export default Profile;