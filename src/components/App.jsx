import { Component } from "react";

import { Searchbar } from "./ PixabayAPI/Searchbar/Searchbar";
import { PicDataView } from "./ PixabayAPI/PicDataView/PicDataView";

class App extends Component {
  state = {
    queryName: "",
  };

  handleSubmit = (queryName) => {
    this.setState({ queryName: queryName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <PicDataView picName={this.state.queryName} />
      </>
    );
  }
}

export { App };
