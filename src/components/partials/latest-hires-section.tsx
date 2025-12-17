import LinkButton from "../ui/link-button";


const latestHires = [
    {
        category: 'Event',
        title: 'Upcoming Team Building Event',
        description: 'We’re excited to announce our upcoming team-building event',
        date: 'June 2025',
        time: '10 am- 4 pm',
        image: '/hires/1.jpg'
    },
    {
        category: 'News',
        title: 'Upcoming Team Building Event',
        description: 'Get ready for our Annual Company',
        date: 'June 2025',
        time: '10 am- 4 pm',
        image: '/hires/2.jpg'
    },
    {
        category: 'Event',
        title: 'Charity Fundraiser',
        description: 'We’re hosting a Charity Fundrais...',
        date: 'Aug 2025',
        time: '10 am- 4 pm',
        image: '/hires/3.jpg'
    }
];

const LatestHiresSection = () => {
    return (
        <div className="bg-white  p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Latest Hires & Events</h2>
                <LinkButton />
            </div>
            <div className="space-y-3">
                {latestHires.map((hire, index) => (
                    <div key={index} className="flex gap-3">
                        <img
                            src={hire.image}
                            alt={hire.title}
                            className="w-26.25 h-22 object-cover"
                        />
                        <div className="flex-1">
                            <h4 className="font-semibold text-sm">{hire.title}</h4>
                            <p className="text-xs text-gray-600 mt-0.5">{hire.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{hire.date} - {hire.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestHiresSection;
