import React, { Component } from "react"
import "./News.css"

export default class NewsDetail extends Component {

    render(){

        const news = this.props.news.find(a => a.id === parseInt(this.props.match.params.newsId, 0)) || {}

        return (
            <section className="news">
                <div className="news">
                    <div key={news.id} className="newsCard">
                        <div className="newsCard-body">
                            <h4 className="newsCard-title">
                                {news.URL}
                            </h4>
                            <h6 className="newsCard-title">{news.Content}</h6>
                                <button onClick={() => this.props.deleteNews(news.id)
                                    .then(() => this.props.history.push("/news"))}
                                className="newsCard-link">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}