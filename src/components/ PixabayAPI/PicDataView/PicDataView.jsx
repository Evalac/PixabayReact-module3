import { Component } from "react";

import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { Button } from "../Button/Button";

class PicDataView extends Component {
  state = {
    dataPic: [],
    error: null,
    status: "idle",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { picName } = this.props;
    const _KEY = "45910491-7a91b10438fcd735159f6d92e";
    const _BASE_URL = `https://pixabay.com/api/?q=${picName}&page=${this.state.page}&key=${_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (prevProps.picName !== picName || prevState.page !== this.state.page) {
      this.setState({ status: "pending" });

      fetch(`${_BASE_URL}`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return Promise.reject(new Error("Щось пішло не так"));
        })
        .then((data) => {
          console.log(data);

          return this.setState({ dataPic: data, status: "resolved" });
        })
        .catch((error) => this.setState({ error: error, status: "rejected" }))
        .finally();
    }
  }
  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    if (this.state.status === "pending") {
      return <Loader />;
    }

    if (this.state.status === "rejected") {
      return <div>{this.state.error.message}</div>;
    }

    if (this.state.status === "resolved") {
      return (
        <>
          <ImageGallery data={this.state.dataPic} />
          <Button onLoadMore={this.handleLoadMore} />
        </>
      );
    }
  }
}

export { PicDataView };
