import React, { Component } from 'react'

export default class NewsList extends Component {

    state = {
        articles: [],
    }

    componentDidMount() {

        const newState = {}

        return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bbc0e75ad7654b9c875084925520fe30')
            .then(result => result.json())
            .then(result => console.log(result))
            .then(() => {
                this.setState(newState)
            })
    }

    render() {
        return (

            <div className="articles">
                {
                    this.state.articles.map(articles =>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-name">
                                    {articles.name}
                                </h5>
                                <section className="card-title">
                                    {articles.title}
                                </section>
                            </div>
                        </div>
                    )}
            </div>
        )
    }

    
}