import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "./Footer";

export default class News extends Component {
  capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1, lower.length);
  };
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
  constructor(props) {
    super(props);
    document.title = `${this.capitalize(this.props.category)}-News App`;
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async loadNews() {
    this.props.setProgress(50);
    let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a1024e0295874edbb3bc91a6abbb8c63&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    console.log(parsedData);
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.loadNews();
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    setTimeout(() => {
      this.loadNews();
    }, 1500);
  };

  render() {
    let nullMessege = "No Description please click on Read-More..";
    let defaultImg =
      "https://imgk.timesnownews.com/story/iStock-503020332.jpg?tr=w-560,h-292,fo-top";

    return (
      <>
        <h2 className="text-center">Daily Top News</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.articles.length !== this.state.articles.totalResults
          }
          // loader={<Loding />}
        >
          <div className="container">
            <div className="row ">
              {this.state.articles.map((items) => {
                return (
                  <div className="col-md-4" key={items.url}>
                    {
                      <NewsItem
                        title={
                          !items.title ? nullMessege : items.title.slice(0, 40)
                        }
                        imageUrl={
                          !items.urlToImage ? defaultImg : items.urlToImage
                        }
                        desc={
                          !items.description
                            ? nullMessege
                            : items.description.slice(0, 40)
                        }
                        newsUrl={items.url}
                        author={items.author}
                        time={items.publishedAt}
                      />
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {this.state.articles.length !== this.state.articles.totalResults && (
          <Footer />
        )}
      </>
    );
  }
}
