import React, { Component } from 'react'
import './Message.css'

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

                <section>
                    <div>
                        <h2 className="formHeader">What everyone is saying</h2>
                        <section className="messages">
                            {
                                this.props.messages.map(messages =>
                                    <div id={`message--${messages.id}`} key={messages.id} className="messageCard">
                                        <div className="messageCard-body">
                                            <p className="messageCard-title">
                                                <section className="formCard">
                                                    <h5>{messages.to}</h5>
                                                    <h6>{messages.message}</h6>
                                                    <p>{messages.date}</p>
                                                    <p>{Date()}</p>
                                                    <h6><button onClick={() => this.props.deletemessage(messages.id)}
                                                        className="newsCard-link">Delete</button></h6>
                                                </section>
                                            </p>

                                        </div>
                                    </div>



                                )}
                        </section>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
