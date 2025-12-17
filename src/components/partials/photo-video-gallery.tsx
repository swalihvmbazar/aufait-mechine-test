import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import LinkButton from '../ui/link-button';

const galleryItems = [
  {
    type: 'photo',
    src: '/gallery/1.jpg',
    alt: 'Office meeting'
  },
  {
    type: 'video',
    src: '/gallery/2.jpg',
    alt: 'Video'
  },
  {
    type: 'photo',
    src: '/gallery/3.jpg',
    alt: 'Office meeting'
  },
  {
    type: 'video',
    src: '/gallery/4.jpg',
    alt: 'Video'
  },
  {
    type: 'photo',
    src: '/gallery/1.jpg',
    alt: 'Office meeting'
  },
  {
    type: 'video',
    src: '/gallery/2.jpg',
    alt: 'Video'
  },
  {
    type: 'photo',
    src: '/gallery/3.jpg',
    alt: 'Office meeting'
  },
  {
    type: 'video',
    src: '/gallery/4.jpg',
    alt: 'Video'
  },
  
];

const PhotoVideoGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 4,
    breakpoints: {
      '(max-width: 640px)': { slidesToScroll: 2 }
    }
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Photo Video Gallery</h2>
        <LinkButton />
      </div>

      <div className="overflow-hidden mb-4" ref={emblaRef}>
        <div className="flex gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative flex-[0_0_calc(50%-8px)] sm:flex-[0_0_calc(25%-12px)] min-w-0"
            >
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center justify-center bg-black/50 size-10 rounded-full">
                      <Play size={15} fill="white" color="white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PhotoVideoGallery;