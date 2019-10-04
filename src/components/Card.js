import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render(props) {
    return (
      <div>
        <div className="card">Task: {props.task}</div>
        <div className="card">Time: {props.time}</div>
      </div>
    );
  }
}

export default Card;
