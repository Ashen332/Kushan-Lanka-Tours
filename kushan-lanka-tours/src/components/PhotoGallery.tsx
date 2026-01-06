import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./PhotoGallery.css";

type Props = {
  images: string[];
};

export default function PhotoGallery({ images }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* Masonry Grid */}
      <div
        style={{
          columnCount: 3,
          columnGap: "1rem",
        }}
        className="gallery-masonry"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            onClick={() => setIndex(i)}
            className="gallery-img mb-3"
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
}
