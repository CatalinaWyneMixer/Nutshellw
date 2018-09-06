import React, { Component } from "react"
import "../login/Login.css"


export default class TaskForm extends Component {
    // Set initial state
    state = {
        task: "",
        id: "",
        detail: "",
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
    Local method for validation, creating task object, and
    invoking the function reference passed from parent component
    */
    constructNewTask = evt => {
        evt.preventDefault()
        const task = {
            name: this.state.taskName,
            date: this.state.taskDate,
            detail: this.state.taskDetail,
            isChecked: false
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

        //setting default input conditions - throwing alert.   MIND THE BANG!
        constructNewTask = evt => {
            evt.preventDefault()
            if (this.state.date === "" || this.state.taskName === "" || this.state.details === "") {
                window.alert("Please input all fields!")
            } else {
                const task = {
                    taskName: this.state.taskName,
                    date: this.state.date,
                    details: this.state.details,
                }

                // Create the animal and redirect user to animal list
                this.props.addTask(task).then(() => this.props.history.push("/tasks"))
            }
        }
    }
        render() {
            return (
                <React.Fragment>
                    <form className="taskForm">
                        <div className="form-group">
                            <label htmlFor="taskName">Task name</label>
                            <input type="text" required="true"
                                onChange={this.handleFieldChange}
                                id="taskName"
                                placeholder="Task name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Due Date </label>
                            <input type="date" required="true"
                                onChange={this.handleFieldChange}
                                id="date" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Details</label>
                            <input type="text" required="true"
                                onChange={this.handleFieldChange}
                                id="details"
                                placeholder="Add details" />
                        </div>
                        <button type="submit" onClick={this.constructNewTask}
                            className="btn btn-primary">Submit</button>


                    </form>
                </React.Fragment>
            )
        }
    }

 