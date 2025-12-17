import React from 'react';


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
    },
    {
        icon: '/icons/bag.png',
        label: 'More',
        color: '#414D9C'
    }
];

const TopBar = () => {
    return (
        <div className='px-20 py-6 bg-primary flex text-white justify-between items-center'>
            <div className='shrink-0'>
                <p className='text-xs opacity-60'>09:30 AM Thursday, May 22, 2025</p>
                <h4>Goodmorning, Charlotte Olivia</h4>
            </div>
            <div className='grid gap-3 grid-cols-5'>
                {links?.map((link, index) => (
                    <div key={index} style={{ 
                        backgroundColor: 'rgba(254, 254, 254, 0.03)'
                     }} className='w-[104px] p-4 flex justify-center items-center flex-col hover:-translate-y-2 cursor-pointer transition-all'>

                        <div className='size-[32px] flex justify-center items-center rounded-full' style={{ 
                            backgroundColor: link.color
                         }}>
                            <img src={`${link.icon}`} />
                        </div>

                        <span className='text-white text-center text-[13px] mt-2'>{link.label}</span>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default TopBar;
