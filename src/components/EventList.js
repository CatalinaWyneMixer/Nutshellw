import React, { Component } from 'react'
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
                                {/* <img src={events_pic} className="icon--dog" /> */}
                                {event.name}
                                    <Link className="nav-link" to={`/events/${event.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.deleteevent(event.id)}
                                    className="card-link">Rid</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}






export default EventList;