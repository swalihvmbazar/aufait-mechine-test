

const NewsSection = () => {
    return (
        <main className='flex  px-20 py-6 gap-6 bg-gray-100'>
            <section className='news-section basis-2/3 shrink-0'>

                <div className='h-[406px] w-full relative flex flex-col justify-end' style={{
                    backgroundImage: 'url(/newses/1.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>

                    <div className="absolute top-0 left-0 h-full w-full" style={{
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.83) 100%)'

                    }} />

                    <div className="z-50 px-10 pb-10  text-white">
                        <span className="bg-[#FBD8D7] text-[#A9132C] py-[6px] px-[10px]">Newsletters</span>

                        <h1 className="font-semibold text-2xl mt-4">Charity Fundraiser for the event</h1>
                        <p className="mt-2 opacity-90 max-w-[300px]">We’re excited to announce our upcoming team-building event</p>
                    </div>

                    {/* <img src="/newses/1.jpg" className="h-full w-full object-cover" alt="" /> */}
                </div>

            </section>
            <section className='shorts-section w-full'>

                {/* leadership Message */}

                <div className="bg-white p-6 w-full h-[406px]">
                    <h2 className="font-semibold mb-6 text-lg">Leadership Message</h2>

                    <img src="/icons/quote.png" alt="" />
                    <p className="text-[#131A25] mt-2">
                        An exceptional team that delivered tailored solutions, improving both efficiency and customer satisfaction. Highly recommended!
                    </p>

                    <div className="mt-20">
                        <div className="flex gap-2">
                            <div className="size-[36px] rounded-full overflow-hidden">
                                <img src="/avatar.png" className="h-ful w-full object-fit" alt="avatar" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[14px]">Sarah Mitchell</h3>
                                <p className="text-xs text-neutral-700">CEO of InnovateTech</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
}

export default NewsSection;
