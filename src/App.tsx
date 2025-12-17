import './App.css'
import Header from './layouts/header'
import Footer from './layouts/footer'
import TopBar from './components/top-bar'
import NewsSection from './components/news-section'

function App() {

  return (
    <div className='font-outfit'>
      <Header />
      <TopBar/>
      <NewsSection/>
      <Footer />
    </div>
  )
}

export default App
