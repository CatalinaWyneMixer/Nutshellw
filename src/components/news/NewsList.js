import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './News.css'


export default class NewsList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="newsButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/news/new")
                        }
                        }>
                        Create New Article
                                </button>
                </div>
                <section>
                    {
                        <div>
                            <h1 className="header">Breaking News:</h1>
                            <hr />
                            <section className="news">
                                {
                                    this.props.news.map(news =>
                                        <div id={`news--${news.id}`} key={news.id} className="newsCard">
                                            <div className="newsCard-body">
                                                <section className="newsCard-title">
                                                    <h4>{news.title}</h4>
                                                    {news.date}
                                                    <Link className="cardnav-link" to={`/news/${news.id}`}>Details</Link>
                                                </section>
                                                <div className="deleteButton">
                                                    <button onClick={() => this.props.deleteNews(news.id)}
                                                        className="newsCard-link">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        </div>
                    }
                </section>
            </React.Fragment>
        )
    }
}