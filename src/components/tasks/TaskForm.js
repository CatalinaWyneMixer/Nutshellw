import React, { Component } from "react"
import "../login/Login.css"


export default class TaskForm extends Component {
    // Set initial state
    state = {
        taskName: "",
        date: "",
        details: "",
        isChecked: false
    }


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewTask = evt => {
        evt.preventDefault()
        if (this.state.date === "" || this.state.taskName === "" || this.state.details === "") {
            window.alert("Please input all fields!")
        } else {
            const task = {
                taskName: this.state.taskName,
                date: this.state.date,
                details: this.state.details,
                isChecked: false
            }

            // Create the animal and redirect user to animal list
            this.props.addTask(task).then(() => this.props.history.push("/tasks"))
        }
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/tasks'
    }
render() {
    return (
        <React.Fragment>
            <form className="taskForm border border-dark">
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

