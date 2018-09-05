import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './News.css'


export default class NewsList extends Component {

    // state = {
    //     articles: [],
    // }

    // componentDidMount() {

    //     const newState = {}

    //     return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bbc0e75ad7654b9c875084925520fe30')
    //         .then(result => result.json())
    //         .then(result => console.log(result))
    //         .then(() => {
    //             this.setState(newState)
    //         })
    // }

    // render() {
    //     return (

    //         <div className="articles">
    //             {
    //                 this.state.articles.map(articles =>
    //                     <div className="card">
    //                         <div className="card-body">
    //                             <h5 className="card-name">
    //                                 {articles.name}
    //                             </h5>
    //                             <section className="card-title">
    //                                 {articles.title}
    //                             </section>
    //                         </div>
    //                     </div>
    //                 )}
    //         </div>
    //     )
    // }

    render() {

        return (
            <React.Fragment>
                <div className="newsButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/news/newChat")
                        }
                        }>
                        Create New Article
                                </button>
                </div>
                <hr />
                <section>
                    {
                        <div>
                            <h1 className="header">Breaking News:</h1>
                            <section className="news">
                                {
                                    this.props.news.map(news =>
                                        <div id={`news--${news.id}`} key={news.id} className="newsCard">
                                            <div className="newsCard-body">
                                                <h2 className="newsCard-title">
                                                    <section>{news.title}</section>
                                                    <h5>{news.date}</h5>
                                                    <Link className="cardnav-link" to={`/news/${news.id}`}>Details</Link>
                                                        <h6><button onClick={() => this.props.deleteNews(news.id)}
                                                            className="newsCard-link">Delete</button></h6>
                                                </h2>
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