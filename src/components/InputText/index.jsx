import React, { PropTypes } from 'react';
import styles from './inputtext.css'

const propTypes = {
    onSendText: PropTypes.func.isRequired,
    userNameToReply: PropTypes.string.isRequired,
    onCloseText: PropTypes.func.isRequired
}

function InputText() {
    return (
        <form className={styles.form} onSubmit={onSendText}>
            <textarea name="text" className={styles.text}>{(userNameToReply) ? `@${userNameToReply}` : ''}</textarea>
            <div className={styles.buttons}>
                <button className={styles.close} onClick={onCloseText}>Cerrar</button>
                <button className={styles.send} type="submit">Enviar</button>
            </div>
        </form>
    )
}

InputText.propTypes = propTypes;

export default InputText;