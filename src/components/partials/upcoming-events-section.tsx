import LinkButton from "../ui/link-button";

const events = [
    {
        title: 'CEO’s Annual Address',
        date: new Date('18 Jul 2025'),
        description: 'Key highlights on company growth',
        location: 'Chennai'
    },
    {
        title: 'Product Development Update',
        date: new Date('24 Aug 2025'),
        description: 'Progress on upcoming product launches...',
        location: 'Pune'
    },
    {
        title: 'Quarterly Financial Review',
        date: new Date('04 Sept 2025'),
        description: 'Analysis of Q2 performance and forecasts...',
        location: 'Kozhikode'
    },
];

const UpcomingEventsSection = () => {
    return (
        <div className="bg-white p-6">
            <div className="flex justify-between items-center mb-7">
                <h3 className="font-semibold text-xl">Upcoming Events</h3>
                <LinkButton />
            </div>
            <div className="space-y-4">
                {events.map((event, index) => {
                   
                    return (
                        <div className="flex gap-3" key={index}>
                            <div className="text-center bg-[#F2F2F4] text-sm font-medium text-[#2E2E2E] rounded-full size-[66px] flex flex-col items-center justify-center">
                                <div>{event.date.getDate()}</div>
                                <div>{event.date.toLocaleString('default', { month: 'short' })}</div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                                <p className="text-xs text-gray-600 mb-1">
                                    {event.description}
                                </p>
                                <p className="text-xs text-gray-500">{event.location} - {event.date.toLocaleString('default', { month: 'short' })} {event.date.getFullYear()}</p>
                            </div>
                        </div>)
                })}

            </div>
        </div>
    );
}

export default UpcomingEventsSection;
