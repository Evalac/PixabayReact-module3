import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ data }) {
  return (
    <ul className="gallery">
      <ImageGalleryItem data={data} />
    </ul>
  );
}

export { ImageGallery };
