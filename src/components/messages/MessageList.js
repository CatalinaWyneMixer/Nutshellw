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

                <section>
                    <div>
                        <h1 className="formHeader">What everyone is saying</h1>
                        <section className="messages">
                            {
                                this.props.messages.map(messages =>
                                    <div id={`animal--${messages.id}`} key={messages.id} className="messageCard">
                                        <div className="messageCard-body">
                                            <h2 className="messageCard-title">
                                                <section>{messages.id}
                                                    <h5>{messages.to}</h5>
                                                    <h6>{messages.message}</h6>
                                                    <p>{messages.date}</p>
                                                    <h6><button onClick={() => this.props.deleteNews(messages.id)}
                                                        className="newsCard-link">Delete</button></h6>

                                                </section>
                                            </h2>

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
