import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { notToDo } from "./data/notToDo.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notToDo: notToDo
    };
  }

  newTask = task => {
    const { notToDo } = this.state;
    const newTasks = [...notToDo, task];

    this.setState(
      {
        notToDo: newTasks
      },
      () => console.log(this.state)
    );
  };

  removeTaskTime = index => {
    const notToDoCopy = this.state.notToDo;
    notToDoCopy.splice(index, 1);

    this.setState(
      {
        notToDo: notToDoCopy
      },
      () => console.log(this.state)
    );
  };

  handleVisibilityForm = () => {
    this.setState({
      visibilityForm: !this.state.visibilityForm
    });
  };

  render() {
    const { notToDo, visibilityForm } = this.state;
    return (
      <div className="App">
        <h1>The ultimate IronHack Not-To-Do-List</h1>
        <h3>
          So you've embarked on a 6-month mission: A part-time Bootcamp at
          IronHack. Do you really know what it takes to be a{" "}
          <strike>hero</strike> IronHacker-Student? Start your personal
          Not-To-Do-List! What else is less important than coding in life?
        </h3>
        <button onClick={this.handleVisibilityForm}>new food</button>
        {visibilityForm && (
          <Form newTask={this.newTask} visibility={this.handleVisibilityForm} />
        )}
        <div>
          {notToDo.map((item, index) => {
            return (
              <div>
                <Card
                  key={index}
                  {...item}
                  removeTaskTime={() => this.removeTaskTime(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
