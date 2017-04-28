import React, { Component } from 'react'
import styles from './profilebar.css'
import { Link } from 'react-router'

class ProfileBar extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className={styles.root}>
                <Link to="/profile">
                    <figure>
                        <img className={styles.avatar} src={this.props.picture} alt=""/>
                    </figure>
                </Link>
                <span className={styles.username}>Hola @{this.props.username}!</span>
                <button className={styles.button} onClick={this.props.onOpenText}>
                <span className="fa fa-lg fa-edit"></span>Tweet!
                </button>
            </div>
        )
    }



}

export default ProfileBar