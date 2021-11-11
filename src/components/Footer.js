import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-dark text-center text-white">
          <div
            className="text-center p-3"
            style={{ background: " rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              {"  "}NewsApp.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
