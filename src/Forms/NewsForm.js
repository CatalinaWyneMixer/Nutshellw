import React, { Component } from 'react'

export default class NewsForm extends Component {

    render() {

        return (
            <React.Fragment>
            <h2>News</h2>
                <section className="titleField">
                <label htmlFor="userID"></label>
                    <label htmlFor="newsTitle">News Title:</label>
                    <p></p>
                    <input required type="text" id="newsTitle" placeholder="News Title" size="35" />
                </section>
                    <p></p>
                <section>
                    <label htmlFor="newsDate">News Date:</label>
                    <input required type="date" id="newsDate" />
                    <label htmlFor="newsURL">News URL:</label>
                    <input required type="text" id="newsURL" placeholder="News URL" />
                </section>
                <section className="contentField">
                <p></p>
                    <label htmlFor="newsContent">News Content:</label>
                    <p></p>
                    <textarea id="newsContent" placeholder="News Content Goes Here!" rows="5" cols="70"></textarea>
                </section>
                <p></p>
                <button id="saveNews">Post News</button>
                </React.Fragment>
        )
    }
}