import React, { Component } from 'react';
import styles from './inputtext.css'

class InputText extends Component {

    render() {
        return (
            <form className={styles.form} onSubmit={this.props.onSendText}>
                <textarea name="text" className={styles.text}>{(this.props.userNameToReply) ? `@${this.props.userNameToReply}` : ''}</textarea>
                <div className={styles.buttons}>
                    <button className={styles.close} onClick={this.props.onCloseText}>Cerrar</button>
                    <button className={styles.send} type="submit">Enviar</button>
                </div>
            </form>
        )
    }
}

export default InputText;