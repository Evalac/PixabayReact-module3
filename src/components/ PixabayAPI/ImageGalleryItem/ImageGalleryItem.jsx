import css from "./ImageGalleryItem.module.css";
import { Modale } from "../Modal/Modal";

function ImageGalleryItem({ data }) {
  return data.hits.map((item) => (
    <li className={css.galleryItem} key={item.id}>
      <Modale largeImg={item.largeImageURL} />
      <img src={item.webformatURL} width="350" height="250" alt="" />
    </li>
  ));
}

export { ImageGalleryItem };
