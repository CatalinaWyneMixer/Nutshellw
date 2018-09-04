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
                <form className="newsForm">
                    <div className="form-group">
                        <section className="titleField">
                            <label htmlFor="userID"></label>
                            <label htmlFor="newsTitle">News Title:</label>
                            <p></p>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="newsTitle"
                                placeholder="News Title"
                                size="35" />
                        </section>
                    </div>
                    <p></p>
                    <div className="form-group">
                        <section>
                            <label htmlFor="newsDate">News Date:</label>
                            <input type="date" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="newsDate" />
                            <label htmlFor="newsURL">News URL:</label>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="newsURL"
                                placeholder="News URL" />
                        </section>
                    </div>
                    <div className="form-group">
                        <section className="contentField">
                            <p></p>
                            <label htmlFor="newsContent">News Content:</label>
                            <p></p>
                            <textarea 
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="newsContent" 
                            placeholder="News Content Goes Here!" rows="5" cols="70"></textarea>
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructNews} className="btn btn-primary">Post Article</button>
                </form>
            </React.Fragment>
        )
    }
}