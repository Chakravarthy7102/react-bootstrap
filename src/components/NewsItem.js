import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card block " style={{ width: "18rem", margin: "15px" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="alternative text here it goes"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn  btn-sm btn-primary"
            >
              Go Read More!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
