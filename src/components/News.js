import React, { Component } from "react";
import Loding from "./Loding";
import NewsItem from "./NewsItem";
import PropTypes from "react";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    newsSize: "6",
    category: "sports",
  };
  static propsTypes = {
    country: PropTypes.string,
    newsSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=en&apiKey=9f4dace8dd01449db36a0f0933321675&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handleNext = async () => {
    if (this.state.page > Math.ceil(this.state.page / this.props.newsSize)) {
      alert("End Of the News");
    } else {
      let url = `http://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&language=en&apiKey=9f4dace8dd01449db36a0f0933321675&page=${
        this.state.page + 1
      }&pageSize=${this.props.newsSize}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  handlePrevs = async () => {
    let url = `http://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&language=en&apiKey=9f4dace8dd01449db36a0f0933321675&page=${
      this.state.page - 1
    }&pageSize=${this.props.newsSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    let nullMessege = "No Description please click on Read-More..";
    let defaultImg =
      "https://imgk.timesnownews.com/story/iStock-503020332.jpg?tr=w-560,h-292,fo-top";

    return (
      <div className="container my-3">
        <h2 className="text-center">Daily Top News</h2>
        {this.state.loading && <Loding />}
        <div className="row ">
          {this.state.articles.map((items) => {
            return (
              <div className="col-md-4" key={items.url}>
                {!this.state.loading && (
                  <NewsItem
                    title={
                      !items.title ? nullMessege : items.title.slice(0, 40)
                    }
                    imageUrl={!items.urlToImage ? defaultImg : items.urlToImage}
                    desc={
                      !items.description
                        ? nullMessege
                        : items.description.slice(0, 40)
                    }
                    newsUrl={items.url}
                    author={items.author}
                    time={items.publishedAt}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-around my-5">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevs}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page > Math.ceil(this.state.page / this.props.newsSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
