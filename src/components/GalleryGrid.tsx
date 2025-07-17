"use client";
import Masonry from 'react-masonry-css';

export default function GalleryGrid({ images }: { images: { src: string; alt: string; orientation: string }[] }) {
  const breakpointColumnsObj = {
    default: 3, // or 4 for even more columns!
    1200: 3,
    900: 2,
    600: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="mdx-album-masonry"
      columnClassName="mdx-album-masonry-column"
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '8px' }}
        />
      ))}
    </Masonry>
  );
}


