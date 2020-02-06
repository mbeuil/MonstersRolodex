import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "vivid-icons";
import { CardList } from "./components/card-list/card-list.component";

/*
 * App.js file
 *
 * Class component that render the rolodex page.
 */

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            type="search"
            placeholder="search monster"
            onChange={e => this.setState({ searchField: e.target.value })}
          />
          <CardList monsters={this.state.monsters} />
        </header>
      </div>
    );
  }
}

export default App;
