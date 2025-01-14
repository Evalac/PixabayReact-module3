import { Component } from "react";

import css from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    queryName: "",
  };

  onChangeQuery = (e) => {
    this.setState({ queryName: e.currentTarget.value });
  };

  submitForm = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.queryName);
    this.setState({ queryName: "" });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.submitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            value={this.state.queryName}
            onChange={this.onChangeQuery}
            name=" queryName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export { Searchbar };
