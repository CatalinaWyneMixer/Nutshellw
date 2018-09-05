import React, { Component } from "react"
// import "./task.css"




export default class TaskDetails extends Component {
    render() {
        /*
            Using the route parameter, find the task that the
            user clicked on by looking at the `this.props.tasks`
            collection that was passed down from ApplicationViews
        */
        const task = this.props.tasks.find(a => a.id === parseInt(this.props.match.params.taskId)) || {}

        return (
            <section className="task">
                <div key={task.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={tasks_pic} className="icon--task" /> */}
                            {task.date}
                        </h4>
                        <h6 className="card-title">{task.name}</h6>
                        <h6 className="card-title">{task.details}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteTask(task.id)
                                            .then(() => this.props.history.push("/tasks"))}
                            className="card-link">Delete</a>
                            <button
                            onClick={() => this.props.history.push(`/tasks/edit/${task.id}`)}
                            className="card-link">Edit</button>
                            console.log("task.id",task.id)
                    </div>
                </div>
            </section>
        )
    }
}