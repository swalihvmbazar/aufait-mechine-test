import {  LayoutGrid } from 'lucide-react';

const links = [
    {
        icon: '/icons/form.png',
        label: 'Company Forms',
        color: '#D33D86'
    },
    {
        icon: '/icons/report.png',
        label: 'Employee Report',
        color: '#E06858'
    },
    {
        icon: '/icons/directory.png',
        label: 'Employee Directory',
        color: '#EEA841'
    },
    {
        icon: '/icons/bag.png',
        label: 'Business Lines',
        color: '#414D9C'
    }
];

const TopBar = () => {
    return (
        <div className=' bg-primary py-2 lg:py-5'>
            <div className='container mx-auto flex flex-col sm:flex-row text-white justify-between items-start sm:items-center gap-4 sm:gap-0'>
                <div className='shrink-0'>
                    <p className='text-[11px] sm:text-[12px] md:text-[14px] opacity-60'>09:30 AM Thursday, May 22, 2025</p>
                    <div className='flex gap-2 sm:gap-3 items-center mt-1.5'>
                        <h4 className='text-[16px] sm:text-[18px] md:text-[22px] leading-tight'>Goodmorning, Charlotte Olivia</h4>
                        <img src="/icons/Waving Hand.png" alt="" className='w-6 h-6 sm:w-7 sm:h-7' />
                    </div>
                </div>
                <div className='grid gap-1 sm:gap-1.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full sm:w-auto'>
                    {links?.map((link, index) => (
                        <div key={index} style={{
                            backgroundColor: 'rgba(254, 254, 254, 0.03)'
                        }} className='p-2 sm:p-3 flex items-center flex-col hover:-translate-y-2 cursor-pointer transition-all'>

                            <div className='size-6 sm:size-8 flex justify-center items-center rounded-full' style={{
                                backgroundColor: link.color
                            }}>
                                <img src={`${link.icon}`} className='w-4 h-4' />
                            </div>


                            <span className='text-white text-center text-[11px] sm:text-[12px] md:text-[13px] mt-1.5 sm:mt-2 line-clamp-2'>{link.label}</span>

                        </div>
                    ))}

                    <div style={{
                        backgroundColor: 'rgba(254, 254, 254, 0.03)'
                    }} className='p-2 sm:p-4 flex items-center flex-col hover:-translate-y-2 cursor-pointer transition-all'>

                        <div className='size-6 sm:size-8 flex justify-center items-center rounded-full bg-[#4D7ABA]'>
                            <LayoutGrid size={16} color="white" strokeWidth={1.5} className='w-4 h-4 sm:w-5 sm:h-5' />
                        </div>
                        <span className='text-white text-center text-[11px] sm:text-[12px] md:text-[13px] mt-1.5 sm:mt-2'>More</span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
