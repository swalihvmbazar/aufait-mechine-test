import { ChevronLeft, ChevronRight } from 'lucide-react';
import Avatar from '../ui/avatar';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const employees = [
    {
        name: 'Allambee Adam',
        message: 'We are proud to recognize Allambee Adam for their exceptional dedication and hard work. Their contributions have made a significant impact.',
        position: 'SR. EXECUTIVE - IT',
        avatar: '/avatar-3.png',
    },
    {
        name: 'Allambee Adam',
        message: 'We are proud to recognize Allambee Adam for their exceptional dedication and hard work. Their contributions have made a significant impact.',
        position: 'SR. EXECUTIVE - IT',
        avatar: '/avatar-3.png',
    },
    
];

const RecognizedEmployeeSection = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    return (
        <div className="bg-[#131A25] text-white  p-6 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">Recognized Employee</h3>
                <div className="flex gap-2">
                    <button className="size-10 flex justify-center items-center rounded-full border border-white/30 hover:bg-white/10 transition-colors" onClick={scrollPrev} >
                        <ChevronLeft size={16} strokeWidth={0.8} />
                    </button>
                    <button className="size-10 flex justify-center items-center rounded-full border border-white/30 hover:bg-white/10 transition-colors" onClick={scrollNext} >
                        <ChevronRight size={16} strokeWidth={0.8} />
                    </button>
                </div>
            </div>
            <div ref={emblaRef} className='embla'>
                <div className="embla__container">
                    {employees.map((employee, index) => (
                        <div key={index} className='embla__slide'>
                            <div className="flex items-center gap-3 mb-3 mt-16">
                                <div className="flex gap-2">
                                    <Avatar src={employee.avatar} size={48} />
                                    <div>
                                        <h3 className="font-semibold text-[14px]">{employee.name}</h3>
                                        <p className="text-xs text-neutral-500">{employee.position}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm ">
                                {employee.message}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecognizedEmployeeSection;
