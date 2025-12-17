import LinkButton from "../ui/link-button";


const news = [
    {
        title: 'New Partnership Announcement',
        description: 'We are thrilled to announce our partnership with ParkRoyal',
        date: 'June 2025',
        time: '10 am- 4 pm',
        image: '/newses/2.jpg'
    },
    {
        title: 'Quarterly Financial Results',
        description: 'We’re pleased to share that we’ve...',
        date: 'May 2025',
        time: '10 am- 4 pm',
        image: '/newses/3.jpg'
    },
    {
        title: 'Office Expansion Announcement',
        description: 'We are expanding our operations and',
        date: 'Apr 2025',
        time: '10 am- 4 pm',
        image: '/newses/4.jpg'
    },
    {
        title: 'Quarterly Financial Review',
        description: 'Analysis of Q2 performance and...',
        date: 'Mar 2025',
        time: '09 am- 4 pm',
        image: '/newses/5.png'
    },
];


const CoperateNewsSection = () => {
    return (
        <div className="bg-white p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Corporate News</h2>
                <LinkButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className="relative h-48.5  overflow-hidden">
                        <img
                            src={news[0].image}
                            alt="Meeting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">{news[0].title}</h3>
                        <p className="text-sm text-gray-600 my-2">
                            {news[0].description}
                        </p>
                        <p className="text-xs text-gray-500">{news[0].date} - {news[0].time}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    {news.slice(1).map((event, idx) => (
                        <div key={idx} className="flex gap-3">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-26.25 h-21 object-cover"
                            />
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm">{event.title}</h4>
                                <p className="text-xs text-gray-600 mt-0.5">{event.description}</p>
                                <p className="text-xs text-gray-500 mt-1">{event.date} - {event.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CoperateNewsSection;
