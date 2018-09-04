import React, { Component } from 'react'

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
                            this.props.history.push("/news/new")
                        }
                        }>
                        Create New Article
                                </button>
                </div>
                <hr />
                <section className="news">
                    {
                        <div>
                            <h1 className="header">News:</h1>
                            <section className="news">
                                {
                                    this.props.news.map(news =>
                                        <div id={`animal--${news.id}`} key={news.id} className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {news.name}
                                                    {/* <Link className="nav-link" to={`/news/${news.id}`}>Details</Link> */}
                                                        <button onClick={() => this.props.deleteAnimal(news.id)}
                                                            className="card-link">Delete</button>
                                                </h5>
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