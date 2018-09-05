import React, { Component } from 'react'

export default class MessageList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="messagesButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/messages/new")
                        }
                        }>
                        Create new message
                    </button>
                </div>  
            </React.Fragment>
        )
    }
}
