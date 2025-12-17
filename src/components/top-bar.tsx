import { Camera, LayoutGrid } from 'lucide-react';

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
        <div className='px-20 py-5 bg-primary flex text-white justify-between items-center'>
            <div className='shrink-0'>
                <p className='text-[14px] opacity-60'>09:30 AM Thursday, May 22, 2025</p>
                <div className='flex gap-3 items-center mt-1.5'>
                    <h4 className='text-[22px] '>Goodmorning, Charlotte Olivia</h4>
                    <img src="/icons/Waving Hand.png" alt="" />
                </div>
            </div>
            <div className='grid gap-1.5 grid-cols-5'>
                {links?.map((link, index) => (
                    <div key={index} style={{
                        backgroundColor: 'rgba(254, 254, 254, 0.03)'
                    }} className='w-26 p-3 flex items-center flex-col hover:-translate-y-2 cursor-pointer transition-all'>

                        <div className='size-8 flex justify-center items-center rounded-full' style={{
                            backgroundColor: link.color
                        }}>
                            <img src={`${link.icon}`} />
                        </div>


                        <span className='text-white text-center text-[13px] mt-2'>{link.label}</span>

                    </div>
                ))}

                <div style={{
                    backgroundColor: 'rgba(254, 254, 254, 0.03)'
                }} className='w-26 p-4 flex  items-center flex-col hover:-translate-y-2 cursor-pointer transition-all'>

                    <div className='size-8 flex justify-center items-center rounded-full bg-[#4D7ABA]'>
                        <LayoutGrid size={16} color="white" strokeWidth={1.5} />
                    </div>
                    <span className='text-white text-center text-[13px] mt-2'>More</span>

                </div>




            </div>
        </div>
    );
}

export default TopBar;
