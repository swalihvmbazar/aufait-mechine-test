import Avatar from "../ui/avatar";

const joiners = [
    { name: 'Gursimran Singh', role: 'SR. EXECUTIVE - IT', image: '/joiners/1.jpg' },
    { name: 'Arjun Patel', role: 'UX Designer', image: '/joiners/2.png' },
    { name: 'Aan Mary', role: 'UI Designer', image: '/joiners/3.jpg' },
    { name: 'Ajmal Khan', role: 'Marketing Head', image: '/joiners/4.jpg' }
];

const NewJoinersSection = () => {
    return (
        <div className="bg-white p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">New Joiners</h2>
                <a href="#" className="text-red-600 text-sm hover:underline">View all</a>
            </div>
            <div className="space-y-3">
                <ul className="space-y-5">
                    {joiners.map((person, index) => (
                        <li key={index} className="flex gap-3 items-center">
                            <div className="flex gap-2">
                                <Avatar src={person.image} size={48} />
                                <div>
                                    <h3 className="font-semibold text-sm">{person.name}</h3>
                                    <p className="text-[13px] text-neutral-700">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NewJoinersSection;
