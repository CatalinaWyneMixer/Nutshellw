import React, { Component } from 'react'

class TaskList extends Component{

    render() {
        return (<React.Fragment>
            <div className="taskButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/tasks/new")}
                        }>
                    Click to add your task
                </button>
            </div>


            </React.Fragment>
    )
}}



export default TaskList;