import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const heroSliders = [
    {
        category: 'Newsletters',
        title: 'Charity Fundraiser for the event',
        description: 'We’re excited to announce our upcoming team-building event',
        image: '/newses/1.jpg'
    },
    {
        category: 'Newsletters',
        title: 'Charity Fundraiser for the event',
        description: 'We’re excited to announce our upcoming team-building event',
        image: '/newses/1.jpg'
    }
]

const HeroSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setCurrentSlide(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);


    return (
        <div className="embla relative" ref={emblaRef}>
            <div className="embla__container">
                {heroSliders?.map((slider, index) => (
                    <div className="embla__slide" key={index}>
                        <div className='h-101.5 w-full relative flex flex-col justify-end' style={{
                            backgroundImage: `url(${slider.image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>

                            <div className="absolute top-0 left-0 h-full w-full" style={{
                                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.83) 100%)'

                            }} />

                            <div className="z-50 px-10 pb-20  text-white">
                                <span className="bg-[#FBD8D7] text-[#A9132C] py-1.5 px-2.5">{slider.category}</span>

                                <h1 className="font-semibold text-2xl mt-4">{slider.title}</h1>
                                <p className="mt-2 opacity-90 max-w-75">{slider.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-5  flex justify-between items-center w-full text-white px-10">
                {/* indicators dots */}
                <div className="flex gap-1">
                    {heroSliders.map((_, index) => (
                        <button key={index} className={`${index == currentSlide ? 'w-12 bg-[#EF423E]' : 'w-3 bg-white/20  hover:opacity-100'} h-1.5 rounded-full transition-all `} onClick={() => scrollTo(index)} />
                    ))}
                </div>

                <div className="flex gap-2">
                    {/* navigation buttons */}
                    <button className="size-10 flex justify-center items-center rounded-full border border-white/30 hover:bg-white/10 transition-colors" onClick={scrollPrev}>
                        <ChevronLeft size={16} strokeWidth={0.8} />
                    </button>
                    <button className="size-10 flex justify-center items-center rounded-full border border-white/30 hover:bg-white/10 transition-colors" onClick={scrollNext}>
                        <ChevronRight size={16} strokeWidth={0.8} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;
