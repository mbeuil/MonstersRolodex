import React, { Component } from "react";
import "vivid-icons";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
/***
 * App.js
 *
 * Class component that render the rolodex page
 * Create an array of users from an external API.
 *
 * usefull nomenclature:
 * const {monsters, searchField} = this.state;
 * =
 * const monsters = this.state.monsters;
 * const searchField = this.state.searchField;
 ***/

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={searchWord =>
            this.setState({ searchField: searchWord.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
