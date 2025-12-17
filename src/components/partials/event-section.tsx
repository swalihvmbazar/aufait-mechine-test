import LinkButton from "../ui/link-button";


const events = [
    {
        title: 'Company Annual Meeting',
        description: 'All are invited to the annual strategy meeting with...',
        date: 'June 2025',
        time: '10 am- 4 pm',
        image: '/events/1.png'
    },
    {
        title: 'CEO’s Annual Address',
        description: 'Key highlights on company grow',
        date: 'Apr 2025',
        time: '11 am- 3 pm',
        image: '/events/2.jpg'
    },
    {
        title: 'Product Development Update',
        description: 'Progress on upcoming product',
        date: 'Apr 2025',
        time: '10 am- 2 pm',
        image: '/events/3.png'
    },
    {
        title: 'Quarterly Financial Review',
        description: 'Analysis of Q2 performance and...',
        date: 'Mar 2025',
        time: '09 am- 4 pm',
        image: '/events/4.png'
    },
];


const EventSection = () => {
    return (
        <div className="bg-white p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Events</h2>
                <LinkButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className="relative h-48.5  overflow-hidden">
                        <img
                            src={events[0].image}
                            alt="Meeting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-bold mb-1">{events[0].title}</h3>
                        <p className="text-sm text-gray-600 my-2">
                            {events[0].description}
                        </p>
                        <p className="text-xs text-gray-500">{events[0].date} - {events[0].time}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    {events.slice(1).map((event, index) => (
                        <div key={index} className="flex gap-3">
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

export default EventSection;
