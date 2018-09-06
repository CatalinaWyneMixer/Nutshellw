import React, { Component } from "react"

// the edit button will live on Event Detail

export default class EventEditForm extends Component {

    state = {

    }
// update state upon edits to fields
handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

componentDidMount() {
    // console.log(this.state)
    const task = this.props.tasks.find(a => a.id === parseInt(this.props.match.params.taskId))
    this.setState(task);
}
constructNewAnimal = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    let newTask = {
        taskName: this.state.taskName,
        taskId: this.props.tasks.find(e => e.name === this.state.task).id,
        date: this.state.date,
        details: this.state.details,
        id: this.state.id
    }
    this.props.editTask(newTask.id, newTask)
    .then(()=>{
        this.props.history.push(`/tasks/${this.props.match.params.taskId}`)
    })
}
constructNewTask = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    let newTask = {
        taskName: this.state.taskName,
        taskId: this.props.tasks.find(e => e.name === this.state.task).id,
        date: this.state.date,
        id: this.state.id,
        details: this.state.details,
        url: this.state.url,

    }
    this.props.editEvent(newTask.id, newTask)
    .then(()=>{
        this.props.history.push(`/tasks/${this.props.match.params.taskId}`)
    })
}

// in this form be sure to add existing STATE INFO in PLACEHOLDER>
render() {
    return (
        <React.Fragment>
            <form className="taskForm">
                <div className="form-group">
                    <label htmlFor="taskName">Task name</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="taskName"
                        placeholder={this.state.taskName} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Due Date </label>
                    <input type="date" required="true"
                         onChange={this.handleFieldChange}
                         id={this.state.date}/>
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="details"
                        placeholder={this.state.details}/>
                </div>
                <button type="submit" onClick={this.constructNewTask}
                className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
}