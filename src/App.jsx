import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LandingPageEntregas from './components/LandingPageEntregas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/entregas" element={<LandingPageEntregas />} />
    </Routes>
  )
}

export default App
