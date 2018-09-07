import React, { Component } from "react"
import DataManager from './../../modules/DataManager'
// the edit button will live on Joke Detail

export default class JokeEditForm extends Component {

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
    const joke = this.props.jokes.find(e => e.id === parseInt(this.props.match.params.jokeId))
    this.setState(joke);
}
constructNewJoke = (evt) => {
    evt.preventDefault()
    console.log("this.state", this.state)
    let newJoke = {
        setup: this.state.setup,
        punchline: this.state.punchline,
        id: this.state.id
    }
    DataManager.edit("jokes", newJoke.id, newJoke)
    .then(()=>{
        this.props.history.push(`/jokes/${this.props.match.params.jokeId}`)
    })}

render() {
    return (
        <React.Fragment>
            <form className="eventForm">
                <div className="form-group">
                    <label htmlFor="setup">setup</label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="newSetup"
                        placeholder={this.props.setup} />
                </div>
                <div className="form-group">
                    <label htmlFor="punchline">punchline </label>
                    <input type="text" required="true"
                        onChange={this.handleFieldChange}
                        id="newpunchline"
                        placeholder={this.props.punchline} />
                </div>
                <button type="submit" onClick={this.constructNewJoke}
                className="btn btn-primary">Submit</button>


            </form>
        </React.Fragment>
    )
}
}