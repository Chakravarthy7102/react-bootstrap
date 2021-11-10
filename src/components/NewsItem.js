import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, author, time } = this.props;

    return (
      <div className="my-3">
        <div className="card block " style={{ margin: "15px" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="alternative text here it goes"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span class="badge bg-secondary">New</span>
            </h5>
            <p className="card-text">{desc}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author}
              </small>
            </p>
            <p className="fw-bold" style={{ fontSize: "12px" }}>
              On {new Date(time).toGMTString()}
            </p>

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
