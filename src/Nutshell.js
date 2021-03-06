import React, { Component } from "react"
import NavBar from "./components/nav/NavBar"
import Header from "./Header"
import ApplicationViews from "./ApplicationViews"

import "bootstrap/dist/css/bootstrap.min.css"


class Nutshell extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Header />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Nutshell