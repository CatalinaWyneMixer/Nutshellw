import React, { Component } from "react"

// the edit button will live on Event Detail

export default class EventEditForm extends Component {

    state = {

    }
// update state upon edits to fields
handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

componentDidMount() {
    // console.log(this.state)
    const message = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messageId))
    this.setState(message);
}

constructNewMessage = evt => {
    evt.preventDefault()
    const credentials = JSON.parse(localStorage.getItem('credentials'))
    let newMessage = {
        id: this.state.messageId,
        to: this.state.messageTo,
        message: this.state.message,
        date: this.state.messageDate,
        userName: credentials.email
    }

    this.props.editMessage(newMessage.id, newMessage)
    .then(()=>{
        this.props.history.push(`/messages/${this.props.match.params.messageId}`)
    })
}


// in this form be sure to add existing STATE INFO in PLACEHOLDER>
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
                            id="to"
                            placeholder={this.state.to}
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
                            placeholder={this.state.message} rows="5" cols="70"></textarea>
                    </section>
                </div>
                <p></p>
                <button type="submit" onClick={this.constructNewMessage} className="btn btn-primary">Update</button>
            </form>
        </React.Fragment>
    )
}
}