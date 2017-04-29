import React, { PropTypes } from 'react';
import styles from './login.css'


const propTypes = {
    onAuth: PropTypes.func.isRequired
}

function Login({ onAuth }) {
    return (
        <div className={styles.root}>
            <p className={styles.text}>Necesitamos que inicies sesión con tu cuenta de GitHub para poder escribir y leer mensajes</p>
            <button onClick={onAuth} className={styles.button}>
                <span className="fa fa-github"></span>
                Login con GitHub
                </button>
        </div>
    )
}

Login.propTypes = propTypes

export default Login;