import { Component } from "react";

import { Searchbar } from "./ PixabayAPI/Searchbar/Searchbar";
import { PicDataView } from "./ PixabayAPI/PicDataView/PicDataView";

import css from "./App.module.css";

class App extends Component {
  state = {
    queryName: "",
  };

  handleSubmit = (queryName) => {
    this.setState({ queryName: queryName });
  };

  render() {
    return (
      <div className="{css.container}">
        <Searchbar onSubmit={this.handleSubmit} />
        <PicDataView picName={this.state.queryName} />
      </div>
    );
  }
}

export { App };
