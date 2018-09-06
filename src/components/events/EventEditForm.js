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
    const event = this.props.events.find(a => a.id === parseInt(this.props.match.params.eventId))
    this.setState(event);
}
constructNewAnimal = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    let newEvent = {
        eventName: this.state.eventName,
        eventId: this.props.events.find(e => e.name === this.state.event).id,
        date: this.state.date,
        url: this.state.url,
        details: this.state.details,
        id: this.state.id
    }
    this.props.editEvent(newEvent.id, newEvent)
    .then(()=>{
        this.props.history.push(`/events/${this.props.match.params.eventId}`)
    })
}
constructNewEvent = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    let newEvent = {
        eventName: this.state.eventName,
        eventId: this.props.events.find(e => e.name === this.state.event).id,
        date: this.state.date,
        id: this.state.id,
        details: this.state.details,
        url: this.state.url,

    }
    this.props.editEvent(newEvent.id, newEvent)
    .then(()=>{
        this.props.history.push(`/events/${this.props.match.params.eventId}`)
    })
}
render() {
    return (
        <React.Fragment>
            <form className="eventForm">
                <div className="form-group">
                    <label htmlFor="eventName">Event name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="eventName"
                        placeholder="Event name" />
                </div>
                <div className="form-group">
                    <label htmlFor="url">URL </label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="url"
                        placeholder="Type URL here" />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder="Add details" />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date </label>
                    <input type="date" required="true"
                         onChange={this.handleFieldChange}
                         id="date"/>

                </div>
                <button type="submit" onClick={this.constructNewEvent}
                className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
}