import React, { Component } from "react"
import "./newsList.css"

export default class NewsDetail extends Component {

    render(){

        const news = this.props.news.find(a => a.id === parseInt(this.props.match.params.newsId, 0)) || {}

        return (
            <section className="news">
                <div className="news">
                    <div key={news.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                {news.title}
                            </h4>
                            <h6 className="card-title">{news.breed}</h6>
                                <button onClick={() => this.props.deleteNews(news.id)
                                    .then(() => this.props.history.push("/news"))}
                                className="card-link">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}