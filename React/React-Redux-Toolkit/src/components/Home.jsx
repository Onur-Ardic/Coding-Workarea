import Footer from './Footer'
import About from './about'
import Contact from './contact'
import Header from './header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default Home
