function ImageGalleryItem({ data }) {
  return data.hits.map((item) => (
    <li className="gallery-item" key={item.id}>
      <img src={item.largeImageURL} width="200px" alt="" />
    </li>
  ));
}

export { ImageGalleryItem };
