import { Component } from "react";

import { Searchbar } from "./ PixabayAPI/Searchbar/Searchbar";

class App extends Component {
  state = {
    queryName: "",
  };

  handleSubmit = (queryName) => {
    this.setState({ queryName: queryName });
  };

  render() {
    return <Searchbar onSubmit={this.handleSubmit} />;
  }
}

export { App };
