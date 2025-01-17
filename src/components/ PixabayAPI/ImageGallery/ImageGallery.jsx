import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

import { Modale } from "../Modal/Modal";

import css from "./ImageGallery.module.css";

function ImageGallery({ data }) {
  const onTargetClick = (e) => {
    console.log(e.target.nodeName);
  };

  return (
    <>
      <Modale />
      <ul className={css.gallery} onClick={onTargetClick}>
        <ImageGalleryItem data={data} />
      </ul>
    </>
  );
}

export { ImageGallery };
