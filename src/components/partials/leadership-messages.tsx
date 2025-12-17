import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback} from 'react';
import Avatar from '../ui/avatar';

const messages = [
    {
        name: 'Sarah Mitchell',
        position: 'CEO of InnovateTech',
        avatar: '/avatar-2.png',
        message: 'An exceptional team that delivered tailored solutions, improving both efficiency and customer satisfaction. Highly recommended!'
    },
    {
        name: 'Sarah Mitchell',
        position: 'CEO of InnovateTech',
        avatar: '/avatar.png',
        message: 'An exceptional team that delivered tailored solutions, improving both efficiency and customer satisfaction. Highly recommended!'
    }
];

const LeadershipMessages = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

     
    return (
        <div className="bg-white p-6 w-full h-101.5 relative flex flex-col">
            <div>
                <h2 className="font-semibold mb-8 text-lg">Leadership Message</h2>

                <img src="/icons/quote.png" alt="" />

            </div>
            <div ref={emblaRef} className='embla relative h-full'>
                <div className="embla__container h-full">
                    {messages?.map((msg, index) => (
                    <div className="embla__slide flex flex-col justify-between" key={index}>
                        <div>
                            <p className="text-[#131a25] mt-3 text-[19px]">
                                {msg.message}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Avatar src={msg.avatar} size={40} />
                            <div>
                                <h3 className="font-semibold text-[14px]">{msg.name}</h3>
                                <p className="text-xs text-neutral-700">{msg.position}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            

            <div className="flex gap-2 absolute bottom-6 right-6">
                {/* navigation buttons */}
                <button className="size-10 flex justify-center items-center rounded-full border border-black/30 hover:bg-black/10 transition-colors" onClick={scrollPrev}>
                    <ChevronLeft size={16} strokeWidth={0.8} />
                </button>
                <button className="size-10 flex justify-center items-center rounded-full border border-black/30 hover:bg-black/10 transition-colors" onClick={scrollNext}>
                    <ChevronRight size={16} strokeWidth={0.8} />
                </button>
            </div>

        </div>
    );
}

export default LeadershipMessages;
