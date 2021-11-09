import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
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
    let url = `http://newsapi.org/v2/top-headlines?country=in&excludeDomains=stackoverflow.com&sortBy=publishedAt&language=en&apiKey=9f4dace8dd01449db36a0f0933321675&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handleNext = async () => {
    if (this.state.page > Math.ceil(this.state.page / 20)) {
      alert("End Of the News");
    } else {
      let url = `http://newsapi.org/v2/top-headlines?country=in&excludeDomains=stackoverflow.com&sortBy=publishedAt&language=en&apiKey=9f4dace8dd01449db36a0f0933321675&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  handlePrevs = async () => {
    let url = `http://newsapi.org/v2/top-headlines?country=in&excludeDomains=stackoverflow.com&sortBy=publishedAt&language=en&apiKey=9f4dace8dd01449db36a0f0933321675&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  render() {
    let nullMessege = "No Description please click on Read-More..";
    let defaultImg =
      "https://imgk.timesnownews.com/story/iStock-503020332.jpg?tr=w-560,h-292,fo-top";

    return (
      <div className="container my-3">
        <h2>Daily Top News</h2>
        <div className="row ">
          {this.state.articles.map((items) => {
            return (
              <div className="col-md-4" key={items.url}>
                <NewsItem
                  title={!items.title ? nullMessege : items.title.slice(0, 40)}
                  imageUrl={!items.urlToImage ? defaultImg : items.urlToImage}
                  desc={
                    !items.description
                      ? nullMessege
                      : items.description.slice(0, 40)
                  }
                  newsUrl={items.url}
                />
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
