import React, { Component } from "react"
import "../components/css/Task.css"

export default class TaskForm extends Component {
    // Set initial state
    state = {
        task: "",
        id: ""
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
        }

        // Create the task and redirect user to task list
        this.props.addTask(task).then(() => this.props.history.push("/tasks"))
    }


    render() {

        return (
            <React.Fragment>
                <form className="taskForm">
                <div className="form-group">
                        <label htmlFor="taskName">Task name</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="taskName"
                            placeholder="Task name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date </label>
                        <input type="date" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="taskDate" placeholder="Pick date here" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="employee">Assign to User</label>
                        <select defaultValue="" name="task" id="task"
                        onChange={this.handleFieldChange}>
                        <option value="">Select a NewTask</option>
                        {/* {
                            this.props.addTasks.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        } */}
                    {/* </select>
                    </div> */}
                    {/* } */}


                    <button type="submit" onClick={this.constructNewTask} className="btn btn-primary">Add Task</button>
                </form>
            </React.Fragment>
        )
    }
}