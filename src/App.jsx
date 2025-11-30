import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LandingPageEntregas from './components/LandingPageEntregas'
import LandingPageMetodologia from './components/LandingPageMetodologia'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/entregas" element={<LandingPageEntregas />} />
      <Route path="/metodologia" element={<LandingPageMetodologia />} />
    </Routes>
  )
}

export default App
