// import React, { Component } from "react"

// // the edit button will live on Joke Detail

// export default class JokeEditForm extends Component {

//     state = {

//     }
// // update state upon edits to fields
// handleFieldChange = evt => {
//     const stateToChange = {}
//     stateToChange[evt.target.id] = evt.target.value
//     this.setState(stateToChange)
// }

// componentDidMount() {
//     // console.log(this.state)
//     const joke = this.props.jokes.find(a => a.id === parseInt(this.props.match.params.jokeId))
//     this.setState(joke);
// }
// constructNewJoke = (evt) => {
//     evt.preventDefault()
//     console.log("this.state", this.state)
//     let newJoke = {
//         setup: this.props.jokes.find(e => e.id === this.state.setup).id,
//         punchline: this.props.jokes.find(e => e.id === this.state.punchline).id,
//         id: this.state.id
//     }
//     this.props.editJoke(newJoke.id, newJoke)
//     .then(()=>{
//         this.props.history.push(`/jokes/${this.props.match.params.jokeId}`)
//     })}

// render() {
//     return (
//         <React.Fragment>
//             <form className="eventForm">
//                 <div className="form-group">
//                     <label htmlFor="setup">setup</label>
//                     <input type="text" required="true"
//                         onChange={this.handleFieldChange}
//                         id="newSetup"
//                         placeholder="newSetup" />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="punchline">punchline </label>
//                     <input type="text" required="true"
//                         onChange={this.handleFieldChange}
//                         id="newpunchline"
//                         placeholder="newpunchline" />
//                 </div>
//                 <button type="submit" onClick={this.constructNewJoke}
//                 className="btn btn-primary">Submit</button>


//             </form>
//         </React.Fragment>
//     )
// }
// }