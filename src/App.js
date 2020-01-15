import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "1"
        },
        {
          name: "Dracula",
          id: "2"
        },
        {
          name: "Zombie",
          id: "3"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.monsters.map(monster => (
            <div>
              <h1 key> {monster.name} </h1>
              <p>monter n'{monster.id}</p>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
