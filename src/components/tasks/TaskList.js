import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./task.css"
class TaskList extends Component {
    state = {
        taskName: "",
        date: "",
        details: "",
        isChecked: false
    }

    // toggleCheckboxChange = () => {
    //     const { toggleCheckboxChange, taskid } = this.props;

    //     this.setState(({ isChecked }) => (
    //         {
    //             isChecked: true,
    //         }
    //     ));

    
    // toggleCheckboxChange(this.state.id);
    // }
    render() {

        
        const complete = { isChecked: true }
        const { id } = this.props;
        // const { isChecked } = this.state;
        return (<React.Fragment>
            <form className="taskListForm">
                <div className="taskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => 
                            this.props.history.push("/tasks/new")
                        
                        }>
                        Click to add your task
                </button>
                </div>
                <div className="checkbox">
                    <section className="tasks">
                        {
                            this.props.tasks.map(task =>
                                <div key={task.id} className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {task.taskName}
                                        </h4>
                                        <br></br>
                                        <h5>{task.date}</h5>
                                        <br></br>
                                        <h6>
                                            <br></br>
                                            {task.detail}
                                            <br></br>

                                            <Link className="nav-link" to={`/tasks/${task.id}`}>Details</Link>
                                            <button
                                                onClick={() => this.props.deleteTask(task.id)}
                                                className="card-link">Delete Task</button>

                                        </h6>
                                    </div>
                                    <label>
                                        <button
                                            onClick={() => this.props.editTask(task.id, complete)}>Complete
                                         </button>  
                                          
                                        {/* {id} */}
                                    </label>
                                </div>
                            )
                        }
                    </section>
                </div>
            </form>
        </React.Fragment>
        )
    }
}

export default TaskList;