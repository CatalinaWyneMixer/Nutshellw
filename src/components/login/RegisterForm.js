import React, { Component } from "react"
import './Register.css'

export default class Register extends Component {

    state = {
        userEmail: "",
        userPassword: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = (e) => {
        e.preventDefault()

        // const users = {
        //     email: this.state.email,
        //     password: this.state.password,
        // }

        // this.props.addUser(users)
        //     .then(() => this.props.history.push("/login"))

        // const user = users.find(user => {
        //     return user.name === $("#usernameTitle").val() && user.email === $("#email").val()
        // })
    }

    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/login'

        const users = {
            email: this.state.userEmail,
            password: this.state.userPassword,
        }

        this.props.addUser(users)
            .then(() => this.props.history.push("/login"))

    }

    render() {


        return (
            <div className="forms">
                <div className="registerForm">
                    <form onSubmit={this.handleRegister}>
                        <h1 className="h3 mb-3 font-weight-normal">Please Create Account</h1>
                        <label htmlFor="userEmail">
                            Email address
                </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="userEmail"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="userPassword">
                            Password
                </label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="userPassword"
                            placeholder="Password"
                            required="" />
                        <button type="submit" onClick={this.handleButtonClick} className="btn btn-primary">
                            Register
                </button>
                    </form>
                </div>
            </div>
        )
    }
}