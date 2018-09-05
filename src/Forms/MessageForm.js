import React, { Component } from 'react'

export default class MessageForm extends Component {

    state = {
        userName: "",
        message: "",
        messageDate: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewMessage = evt => {
        evt.preventDefault()
        const messages = {
            userName: this.state.userName,
            message: this.state.message,
            date: this.state.messageDate
        }

        this.props.addMessages(messages)
        .then(() => this.props.history.push("/messages/new"))
    }

    render() {

        return (
            <React.Fragment>
                <h2>Message</h2>
                <form className="messageForm">
                    <div className="form-group">
                        <section className="messageField">
                            <label htmlFor="messageId"></label>
                            <label htmlFor="messageTo">Message To:</label>
                            <p></p>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="messageTo"
                                placeholder="Message To"
                                size="35" />
                        </section>
                    </div>
                    <p></p>
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                        <section className="messageField">
                            <p></p>
                            <label htmlFor="message">Message:</label>
                            <p></p>
                            <textarea 
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="message" 
                            placeholder="..." rows="5" cols="70"></textarea>
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.addMessage} className="btn btn-primary">Send Message</button>
                </form>
            </React.Fragment>
        )
    }
}
