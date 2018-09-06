import React, { Component } from "react"
import './Register.css'

export default class Register extends Component {

    render() {

        return (
            <div className="forms">
                <div className="registerForm">
                    <form onSubmit={this.handleRegister}>
                        <h1 className="h3 mb-3 font-weight-normal">Please Create Account</h1>
                        <label htmlFor="inputEmail">
                            Email address
                </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="registerEmail"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputPassword">
                            Password
                </label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="registerPassword"
                            placeholder="Password"
                            required="" />
                        <button type="submit" className="btn btn-primary">
                            Register
                </button>
                    </form>
                </div>
            </div>
        )
    }
}