import './App.css'
import Header from './layouts/header'
import Footer from './layouts/footer'
import TopBar from './components/top-bar'
import HeroSlider from './components/partials/hero-slider'
import EventSection from './components/partials/event-section'
import CoperateNewsSection from './components/partials/coperate-news-section'
import LatestHiresSection from './components/partials/latest-hires-section'
import NewJoinersSection from './components/partials/new-joiners-section'
import PhotoVideoGallery from './components/partials/photo-video-gallery'
import LeadershipMessages from './components/partials/leadership-messages'
import WelcomeToTeam from './components/partials/welcome-to-team'
import HrAnnouncement from './components/partials/hr-announcement'
import RecognizedEmployeeSection from './components/partials/recognized-employee-section'
import DiscussionBoardSection from './components/partials/discussion-board-section'
import UpcomingEventsSection from './components/partials/upcoming-events-section'

function App() {

  return (
    <div className='font-outfit bg-gray-100'>
      <Header />
      <TopBar />
      <main className='container mx-auto py-4 lg:py-10  grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <section className='news-section lg:col-span-2 space-y-6'>
          <HeroSlider />
          <EventSection />
          <CoperateNewsSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LatestHiresSection />
            <NewJoinersSection />
          </div>

          <PhotoVideoGallery />

        </section>
        <section className='shorts-section space-y-6'>
          <LeadershipMessages />
          <WelcomeToTeam />
          <HrAnnouncement />
          <RecognizedEmployeeSection />
          <DiscussionBoardSection />
          <UpcomingEventsSection />

        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
