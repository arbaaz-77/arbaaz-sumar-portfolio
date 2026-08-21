import { useState } from 'react'

type ProjectGalleryProps = {
  title: string
  images: string[]
}

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeImage = images[activeIndex]

  return (
    <div className="project-gallery">
      <div className="project-gallery__main">
        <img
          className="project-gallery__main-image"
          src={activeImage}
          alt={`${title} screenshot ${activeIndex + 1}`}
        />
      </div>

      {images.length > 1 && (
        <div
          className="project-gallery__thumbnails"
          aria-label={`${title} screenshots`}
        >
          {images.map((image, index) => (
            <button
              className="project-gallery__thumbnail"
              type="button"
              key={image}
              aria-label={`Show ${title} screenshot ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
