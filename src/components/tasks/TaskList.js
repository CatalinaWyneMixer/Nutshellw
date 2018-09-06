import React, { Component } from 'react'
import "./task.css"
class TaskList extends Component {
    state = {
        task: "",
        id: "",
        detail: "",
        isChecked: false
    }

    toggleCheckboxChange = () => {
        const { toggleCheckboxChange, taskid } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked: true,
            }
        ));

    
        
        // toggleCheckboxChange(this.state.id);
    }

    // hideTask= ( => {
    //     if (isChecked) {
    //      document.getElementById("myForm").style.display = "none"   
    //     }
        
    // })
    render() {
        const { id } = this.props;
        const { isChecked } = this.state;
        return (<React.Fragment>
            <form className="taskListForm">
                <div className="taskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/tasks/new")
                        }
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
                                            {task.name}
                                        </h4>
                                        <h6>
                                            <br></br>
                                            {task.detail}
                                            <br></br>

                                            {/* <Link className="nav-link" to={`/tasks/${task.id}`}>Details</Link> */}
                                            <button
                                                onClick={() => this.props.deleteTask(task.id)}
                                                className="card-link">Delete Task</button>
                                            <button
                                                onClick={() => this.props.editTask(task.id)}
                                                className="card-link">Edit Task</button>
                                        </h6>
                                    </div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            id={`task--${task.id}`}
                                            value={id}
                                            checked={isChecked}
                                            onChange={this.state.toggleCheckboxChange}
                                            // onClick={() => this.props.deleteTask(task.id)}
                                            onClick="hideTask()"
                                            
                                        />
                                        {id}
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