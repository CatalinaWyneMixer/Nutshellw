import React, { Component } from 'react'
import "../components/css/Task.css"
class TaskList extends Component {
    state = {
        task: "",
        id: "",
        isChecked: false
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(label);
    }
    render() {
        const { label } = this.props;
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
                                    onClick={() => this.props.deletetask(task.id)}
                                    className="card-link">Delete Task</button>
                                    </h5>
                        </div>
                        <label>
                            <input
                                type="checkbox"
                                value={label}
                                checked={isChecked}
                                onChange={this.toggleCheckboxChange}
                            />
                            {label}
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