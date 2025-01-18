import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";

function ImageGallery({ data }) {
  return (
    <>
      <ul className={css.gallery}>
        <ImageGalleryItem data={data} />
      </ul>
    </>
  );
}

export { ImageGallery };
