import { Component } from "react";

import { IoMdSearch } from "react-icons/io";

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
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.submitForm}>
          <div className={css.inputWrapper}>
            <button type="submit" className={css.button}>
              <IoMdSearch size={24} />
            </button>
            <input
              className={css.input}
              type="text"
              value={this.state.queryName}
              onChange={this.onChangeQuery}
              name=" queryName"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </div>
        </form>
      </header>
    );
  }
}

export { Searchbar };
