import React, { Component } from 'react'
import './Message.css'
class MessageList extends Component {
    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }

    render() {
        // console.log(this.props.users.find(user => user.userName === "MessageTest"))
        // console.log(this.props.users)
        // console.log(this.props)
        const credentials = JSON.parse(localStorage.getItem('credentials'))

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
                                        <div id="messageCard-body">
                                            <h6 className="messageCard-title">
                                                <section className="formCard">
                                                    <h5> From: {this.findUserName(messages)}</h5>
                                                    <h6> to: {messages.to}</h6>
                                                    <h6>{messages.message}</h6>
                                                    <p>{messages.date}</p>
                                                    <button
                                                        onClick={() => this.props.deleteMessage(messages.id)
                                                            .then(() => this.props.history.push("/messages"))}
                                                        className="nav-link-delete"><hover>Delete</hover></button>
                                                    <button
                                                        onClick={() => this.props.history.push(`/messages/edit/${messages.id}`)}
                                                        className="card-link-edit"><span>Edit</span></button>



                                                </section>

                                            </h6>
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

export default MessageList
