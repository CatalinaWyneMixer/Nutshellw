import React, { Component } from "react"
import "../components/css/Login.css"

export default class EventForm extends Component {
    // Set initial state
    state = {
        eventName: "",
        url: "",
        date: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating event object, and
        invoking the function reference passed from parent component
     */
    constructNewEvent = evt => {
        evt.preventDefault()
        if (this.state.event === "") {
            window.alert("Please input")
        } else {
            const event = {
                eventName: this.state.eventName,
                url: this.state.url,
                date: this.state.date
            }

            // Create the animal and redirect user to animal list
            this.props.addEvent(event).then(() => this.props.history.push("/events"))
        }
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



// As a user, I should be able to enter in an event that will happen at a future date, and when that event is next on the agenda, it should be more prominent in the application

// Acceptance Criteria
// Given a user wants to keep track on a future event
// When the user clicks an affordance to enter a new event in the application
// Then a form should be presented to the user in which the following properties of the event can be provided

// Name of event
// Date of event
// Location of event
// Given a user has entered in all details of an event
// When the user performs a gesture to save the event
// Then the event should be displayed in the application in the Events component

// Given a user has entered in 1, or more, events
// When the event component is updated
// Then the next event on the agenda should have bold text
// And it should be slightly larger in size
// And it should have a non-white, and non-offensive background color

// Given a user wants to change the details of an event
// When the user performs a gesture to edit an event
// Then the user should be presented with a form that has the event details pre-filled into the fields
// And there should be an affordance to save the new details