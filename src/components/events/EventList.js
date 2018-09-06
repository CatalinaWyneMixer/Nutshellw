import React, { Component } from 'react'
//import events_pic from "events_pic.jpg"
import { Link } from "react-router-dom"
import './Event.css'

class EventList extends Component{

    render() {
        return (<React.Fragment>
            <div className="eventButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/events/new")}
                        }>
                    Click to add your event
                </button>
            </div>
            <section className="events">
            {
                this.props.events.map(event =>
                    <div key={event.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {event.eventName}
                                    <Link className="nav-link" to={`/events/${event.id}`}>Details</Link>
                                    </h5>
                                <button
                                    onClick={() => this.props.deleteEvent(event.id)}
                                    className="nav-link-quit">Quit Event</button>
                            <h4 className="card-tile">{event.date}
                                </h4>
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}






export default EventList;