import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "", time: "" };
  }

  handleChange = event => {
    this.setState(
      {
        [event.target.name]:
          event.target.type === "number"
            ? parseInt(event.target.value)
            : event.target.value
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const { newTask, visibility } = this.props;
    newTask(this.state);
    this.setState({ task: "", time: "" }, () => visibility());
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>New task:</div>
        <label>Task:</label>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Add a task you should NOT be doing"
        />
        <label>Time:</label>
        <input
          type="text"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
          placeholder="Add time loss in minutes or hours"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default Form;
