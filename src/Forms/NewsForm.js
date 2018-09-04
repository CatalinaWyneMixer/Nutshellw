import React, { Component } from 'react'

export default class NewsForm extends Component {

    state = {
        newsTitle: "",
        newsDate: "",
        newsURL: "",
        newsContent: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNews = evt => {
        evt.preventDefault()
        const news = {
            title: this.state.newsTitle,
            date: this.state.newsDate,
            URL: this.state.newsURL,
            Content: this.state.newsContent
        }

        this.props.addNews(news).then(() => this.props.history.push("/news"))
    }

    render() {

        return (
            <React.Fragment>
            <h2>News</h2>
            <hr />
                <section className="titleField">
                <label htmlFor="userID"></label>
                    <label htmlFor="newsTitle">News Title:</label>
                    <p></p>
                    <input type="text" id="newsTitle" placeholder="News Title" size="35" />
                </section>
                    <p></p>
                <section>
                    <label htmlFor="newsDate">News Date:</label>
                    <input type="date" id="newsDate" />
                    <label htmlFor="newsURL">News URL:</label>
                    <input type="text" id="newsURL" placeholder="News URL" />
                </section>
                <section className="contentField">
                <p></p>
                    <label htmlFor="newsContent">News Content:</label>
                    <p></p>
                    <textarea id="newsContent" placeholder="News Content Goes Here!" rows="5" cols="70"></textarea>
                </section>
                <p></p>
                <button id="saveNews" onClick={this.constructNews} className="btn btn-primary">Post News</button>
                </React.Fragment>
        )
    }
}