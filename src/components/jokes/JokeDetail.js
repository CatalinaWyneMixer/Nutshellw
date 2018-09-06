import React, { Component } from "react"


export default class JokeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const joke = this.props.jokes.find(a => a.id === parseInt(this.props.match.params.jokeId)) || {}

        return (
            <section className="joke">
                <div key={joke.id} className="detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                        </h4>
                        <h6 className="card-title">{joke.setup}</h6>
                        <h6 className="card-title"></h6>
                        <h6>{joke.punchline},
                        </h6>
                        <h5>
                        <a href="#"
                            onClick={() => this.props.deletejoke(joke.id)
                                            .then(() => this.props.history.push("/jokes"))}
                            className="card-link">Delete</a>
                            <a href="#"
                            onClick={() => this.props.history.push(`/jokes/edit/${joke.id}`)}
                            className="card-link">Edit</a></h5>
                    </div>
                </div>
            </section>
        )
    }
}