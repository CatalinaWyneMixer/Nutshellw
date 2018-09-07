import React, { Component } from "react"
import "./Event.css"
import events_pic from "./events_pic.jpg"
import { Link } from "react-router-dom"



export default class EventDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const event = this.props.events.find(a => a.id === parseInt(this.props.match.params.eventId, 0)) || {}

        return (
            <section className="event">
                <div key={event.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={events_pic} alt="" className="icon--event" />
                        </h4>
                        <h6 className="card-title">{event.name}</h6>
                        <h6>{event.details},
                        {event.date},
                        {event.url}
                        </h6>
                        <h5>
<<<<<<< HEAD
                        <a
                            onClick={() => this.props.deleteEvent(event.id)
                                    .then(() => this.props.history.push("/events"))}
                            className="btn btn-success">Delete</a>

                            <a

                            onClick={() => this.props.history.push(`/events/edit/${event.id}`)}
                            className="btn btn-warning">Edit</a></h5>


                        <Link className="btn btn-primary"
=======
                            <a
                                onClick={() => this.props.deleteEvent(event.id)
                                    .then(() => this.props.history.push("/events"))}
                                className="btn btn-success">Delete</a>

                            <a
                                type="submit"
                                className="btn btn-success"
                                onClick={() => this.props.history.push(`/events/edit/${event.id}`)}
                                className="card-link">Edit</a></h5>


                        <Link className="nav-link"
>>>>>>> master
                            to="/events">Back To Events</Link>


                    </div>
                </div>
            </section>
        )
    }
}