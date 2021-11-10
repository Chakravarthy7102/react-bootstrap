import React, { Component } from "react";
import pac from "../assets/pac.gif";

export default class Loding extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={pac} alt="Loading..." width="80px"></img>
      </div>
    );
  }
}
