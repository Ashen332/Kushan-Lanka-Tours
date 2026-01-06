import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./InstagramCarousel.css";

type Props = {
  images: string[];
};

export default function InstagramCarousel({ images }: Props) {
  const [index, setIndex] = useState(-1);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  // 🔥 RESET when images change
  useEffect(() => {
    setLoaded(new Array(images.length).fill(false));
    setIndex(-1);
  }, [images]);

  return (
    <>
      {/* Carousel */}
      <div className="ig-carousel">
        {images.map((img, i) => (
          <div key={`${img}-${i}`} className="ig-slide">
            {/* Blur placeholder */}
            <div className={`blur-bg ${loaded[i] ? "hidden" : ""}`} />

            <img
              src={img}
              alt=""
              loading="lazy"
              decoding="async"
              className={`ig-img ${loaded[i] ? "show" : ""}`}
              onLoad={() => {
                setLoaded((prev) => {
                  const copy = [...prev];
                  copy[i] = true;
                  return copy;
                });
              }}
              onClick={() => setIndex(i)}
            />
          </div>
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
