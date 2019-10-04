import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div>
        <form id="form1">
          <input type="text" placeholder="Add a task you should NOT be doing" />
        </form>
        <form id="form2">
          <input type="text" placeholder="Add time loss in minutes or hours" />
        </form>
        <button type="submit" onclick="submitForm()">
          Add
        </button>
      </div>
    );
  }
}

export default Form;
