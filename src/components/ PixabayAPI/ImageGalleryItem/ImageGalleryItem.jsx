import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import css from "./ImageGalleryItem.module.css";
import { Modale } from "../Modal/Modal";

class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
    selectedImage: null,
  };

  openModal = (imageUrl) => {
    this.setState({ modalIsOpen: true, selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false, selectedImage: null });
  };

  render() {
    const { data } = this.props;
    const { modalIsOpen } = this.state;

    return data.map((item) => (
      <li className={css.galleryItem} key={item.id}>
        {modalIsOpen && (
          <Modale
            largeImg={this.state.selectedImage}
            closeModal={this.closeModal}
          />
        )}
        <img
          style={{ cursor: "pointer" }}
          src={item.webformatURL}
          width="350"
          height="250"
          alt=""
          onClick={() => this.openModal(item.largeImageURL)}
        />
      </li>
    ));
  }
}

export { ImageGalleryItem };
