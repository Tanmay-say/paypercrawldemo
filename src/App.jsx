import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Datasets from './components/Datasets'
import Reports from './components/Reports'
import Team from './components/Team'
import Blog from './components/Blog'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Datasets />
        <Reports />
        <Blog />
        <Team />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
