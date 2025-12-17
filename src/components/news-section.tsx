import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSlider from "./partials/hero-slider";
import LeadershipMessages from "./partials/leadership-messages";
import EventSection from "./partials/event-section";
import WelcomeToTeam from "./partials/welcome-to-team";
import HrAnnouncement from "./partials/hr-announcement";
import CoperateNewsSection from "./partials/coperate-news-section";
import RecognizedEmployeeSection from "./partials/recognized-employee-section";


const NewsSection = () => {
    return (
        <main className='px-20 py-10 bg-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <section className='news-section lg:col-span-2 space-y-6'>
                <HeroSlider/>
                <EventSection/>
                <CoperateNewsSection/>

                {/* Latest Hires & Events */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Latest Hires & Events</h2>
                            <a href="#" className="text-red-600 text-sm hover:underline">View all</a>
                        </div>
                        <div className="space-y-3">
                            {[
                                { name: 'Marketing Team Building Event', date: '23 Aug', img: 1573496359245 },
                                { name: 'Upcoming Team Building Event', date: '23 Aug', img: 1522071820677 },
                                { name: 'We are Hiring as a COO for Upcoming Team', date: '23 Aug', img: 1573497019940 }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-center">
                                    <img
                                        src={`https://images.unsplash.com/photo-${item.img}?w=60&h=60&fit=crop`}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-sm">{item.name}</h4>
                                        <p className="text-xs text-gray-500">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">New Joiners</h2>
                            <a href="#" className="text-red-600 text-sm hover:underline">View all</a>
                        </div>
                        <div className="space-y-3">
                            {[
                                { name: 'Brandon Mark', role: 'Sr Developer' },
                                { name: 'Ryan Peter', role: 'HR Manager' },
                                { name: 'Kate Mary', role: 'Marketing' },
                                { name: 'Anand Dives', role: 'Sr Developer' }
                            ].map((person, idx) => (
                                <div key={idx} className="flex gap-3 items-center">
                                    <img
                                        src={`https://images.unsplash.com/photo-${1494790108377 + idx * 10000000}?w=40&h=40&fit=crop`}
                                        alt={person.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-sm">{person.name}</h4>
                                        <p className="text-xs text-gray-500">{person.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Photo Video Gallery */}
                <div className="bg-white rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Photo Video Gallery</h2>
                        <a href="#" className="text-red-600 text-sm hover:underline flex items-center gap-1">
                            View all <ChevronRight size={16} />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="relative h-32 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop"
                                alt="Office meeting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden bg-gray-900">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop"
                                alt="Video"
                                className="w-full h-full object-cover opacity-70"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden bg-gray-900">
                            <img
                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop"
                                alt="Video"
                                className="w-full h-full object-cover opacity-70"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-900 border-b-8 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2">
                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                            <ChevronLeft size={16} />
                        </button>
                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

            </section>
            <section className='shorts-section space-y-6'>
                <LeadershipMessages/>
                <WelcomeToTeam />
                <HrAnnouncement />
                <RecognizedEmployeeSection/>
                

                {/* Discussion Board */}
                <div className="bg-white rounded-lg p-6">
                    <h3 className="font-bold mb-3">Discussion Board</h3>
                    <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop"
                            alt="Partnership"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">New Partnership Announcement</h4>
                    <p className="text-xs text-gray-600 mb-3">
                        In December, Jomention hit and incredible partnership. It shows how commited the company is to being innovative...
                    </p>
                    <a href="#" className="text-red-600 text-sm hover:underline">Read More</a>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold">Upcoming Events</h3>
                        <a href="#" className="text-red-600 text-sm hover:underline flex items-center gap-1">
                            View all <ChevronRight size={16} />
                        </a>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold">18</div>
                                <div className="text-xs text-gray-500">Jul</div>
                            </div>
                            <div className="flex-1 border-l-2 border-gray-200 pl-4">
                                <h4 className="font-semibold text-sm mb-1">CEO's Annual Address</h4>
                                <p className="text-xs text-gray-600 mb-1">
                                    Key highlights on company growth
                                </p>
                                <p className="text-xs text-gray-500">8 Internet - Jul 2025</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold">24</div>
                                <div className="text-xs text-gray-500">Aug</div>
                            </div>
                            <div className="flex-1 border-l-2 border-gray-200 pl-4">
                                <h4 className="font-semibold text-sm mb-1">Product Development Update</h4>
                                <p className="text-xs text-gray-600 mb-1">
                                    Progress on upcoming product launches...
                                </p>
                                <p className="text-xs text-gray-500">Aya - Aug 2025</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold">04</div>
                                <div className="text-xs text-gray-500">Sept</div>
                            </div>
                            <div className="flex-1 border-l-2 border-gray-200 pl-4">
                                <h4 className="font-semibold text-sm mb-1">Quarterly Financial Review</h4>
                                <p className="text-xs text-gray-600 mb-1">
                                    Analysis of Q2 performance and forecasts...
                                </p>
                                <p className="text-xs text-gray-500">Keithlude - Sept 2025</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}

export default NewsSection;
