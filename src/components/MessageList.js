import React, { Component } from 'react'

export default class messagesList extends Component {

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
                        Create New messages
                                </button>
                </div>
                <hr />
                <section className="messages">
                    {
                        <div>
                            <section className="news">
                                {
                                    this.props.messages.map(messages =>
                                        <div id={`animal--${messages.id}`} key={messages.id} className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {messages.name}
                                                        <button onClick={() => this.props.deleteAnimal(messages.id)}
                                                            className="card-link">Delete</button>
                                                </h5>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        </div>
                    }
                </section>
            </React.Fragment>
        )
    }
}

