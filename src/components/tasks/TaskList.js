import React, { Component } from 'react'
import "./task.css"
class TaskList extends Component {
    state = {
        task: "",
        id: "",
        isChecked: false
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, id } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(id);
    }
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
                            <h5 className="card-title">
                                {task.name}

                                    {/* <Link className="nav-link" to={`/tasks/${task.id}`}>Details</Link> */}
                                <button
                                    onClick={() => this.props.deleteTask(task.id)}
                                    className="card-link">Delete Task</button>
                                    </h5>
                        </div>
                        <label>
                            <input
                                type="checkbox"
                                id={`task--${task.id}`}
                                value={id}
                                checked={isChecked}
                                onChange={this.toggleCheckboxChange}
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