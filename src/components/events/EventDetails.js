import React, { Component } from "react"
import "./Event.css"
import events_pic from "./events_pic.jpg"



export default class EventDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const event = this.props.events.find(a => a.id === parseInt(this.props.match.params.eventId)) || {}

        return (
            <section className="event">
                <div key={event.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={events_pic} className="icon--event" />
                        </h4>
                        <h6 className="card-title">{event.name}</h6>
                        <h6 className="card-title"></h6>
                        <h7>{event.details},
                        {event.date},
                        {event.url}
                        </h7>
                        <h5>
                        <a href="#"
                            onClick={() => this.props.deleteEvent(event.id)
                                            .then(() => this.props.history.push("/events"))}
                            className="card-link">Delete</a>
                            <a href="#"
                            onClick={() => this.props.history.push(`/events/edit/${event.id}`)}
                            className="card-link">Edit</a></h5>
                    </div>
                </div>
            </section>
        )
    }
}