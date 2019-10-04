import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { notToDo } from "./data/notToDo.js";

class App extends Component {
  state = {
    notToDo: notToDo,
    title: "The ultimate IronHack Not-To-Do-List"
  };

  // handleAddColor = () => {
  //   const { notToDo } = this.state;
  //   this.setState({
  //     notToDo: [...notToDo],
  //     title: 'The ultimate IronHack Not-To-Do-List'
  //   }, () => {
  //     console.log('🤣', this.state.notToDo)
  //   })
  // }

  render() {
    const { title, notToDo } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <h3>
          So you've embarked on a 6-month mission: A part-time Bootcamp at
          IronHack. Do you really know what it takes to be a{" "}
          <strike>hero</strike> IronHacker-Student? Start your personal
          Not-To-Do-List! What else is less important than coding in life?
        </h3>
        <Form />
        {/* <Button myProp={this.handleAddColor}>
          Add
        </Button> */}
        <div>
          {notToDo.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
