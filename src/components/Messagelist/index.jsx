import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.messages.map(msg => {
                    return (
                        <p>{msg.text}</p>
                    )
                })}
            </div>
        );
    }
}

export default MessageList;