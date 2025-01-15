import css from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ data }) {
  return data.hits.map((item) => (
    <li className={css.galleryItem} key={item.id}>
      <img src={item.webformatURL} width="350" height="250" alt="" />
    </li>
  ));
}

export { ImageGalleryItem };
