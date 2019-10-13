import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { task, time, removeTaskTime } = this.props;
    return (
      <div>
        <div className="card">Task: {task}</div>
        <div className="card">Time: {time}</div>
        <button onClick={removeTaskTime}>Delete</button>
      </div>
    );
  }
}

export default Card;
