import { Component } from "react";
import { Hourglass } from "react-loader-spinner";

import { ImageGallery } from "../ImageGallery/ImageGallery";

class PicDataView extends Component {
  state = {
    dataPic: [],
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const { picName } = this.props;
    const _KEY = "45910491-7a91b10438fcd735159f6d92e";
    const _BASE_URL = `https://pixabay.com/api/?q=${picName}&page=1&key=${_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    if (prevProps.picName !== picName) {
      this.setState({ status: "pending" });

      fetch(`${_BASE_URL}`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
        })
        .then((data) => {
          console.log(data);

          return this.setState({ dataPic: data, status: "resolved" });
        })
        .catch((error) => console.log(error))
        .finally();
    }
  }

  render() {
    if (this.state.status === "pending") {
      return (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      );
    }

    if (this.state.status === "rejected") {
      return <div>Помилка</div>;
    }

    if (this.state.status === "resolved") {
      return <ImageGallery data={this.state.dataPic} />;
    }
  }
}

export { PicDataView };
