import React, { Component } from 'react'

export default class MessageForm extends Component {

    state = {
        messageId: "",
        messageTo: "",
        message: "",
        messageDate: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructMessages = evt => {
        evt.preventDefault()
        const messages = {
            Id: this.state.messageId,
            To: this.state.messageTo,
            message: this.state.message,
            Date: this.state.messageDate
        }

        this.props.addMessages(messages).then(() => this.props.history.push("/messages"))
    }

    render() {

        return (
            <React.Fragment>
                <h2>Message</h2>
                <form className="messageForm">
                    <div className="form-group">
                        <section className="messageField">
                            <label htmlFor="userID"></label>
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
                            <label htmlFor="newsContent">Message:</label>
                            <p></p>
                            <textarea 
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="message" 
                            placeholder="..." rows="5" cols="70"></textarea>
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructNews} className="btn btn-primary">Send Message</button>
                </form>
            </React.Fragment>
        )
    }
}
