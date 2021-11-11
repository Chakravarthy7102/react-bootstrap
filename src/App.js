import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  newsSize = 9;
  country = "us";
  apikey = process.env.REACT_APP_API_KEY;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height="5px"
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="main/general"
                  newsSize={this.newsSize}
                  country={this.country}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="business"
                  newsSize={this.newsSize}
                  country={this.country}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="entertainment"
                  newsSize={this.newsSize}
                  country={this.country}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="general"
                  newsSize={this.newsSize}
                  country={this.country}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="health"
                  newsSize={this.newsSize}
                  country={this.country}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="science"
                  newsSize={this.newsSize}
                  country={this.country}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="sports"
                  newsSize={this.newsSize}
                  country={this.country}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  apikey={this.apikey}
                  setProgress={this.setProgress}
                  key="technology"
                  newsSize={this.newsSize}
                  country={this.country}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
