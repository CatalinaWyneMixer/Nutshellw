import React, { Component } from 'react'
import { Link } from "react-router-dom"

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


            </React.Fragment>
    )
}}






export default EventList;