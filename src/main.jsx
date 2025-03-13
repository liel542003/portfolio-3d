import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import ConceptGallery from './components/ConceptGallery'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/portfolio-3d">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/concepts" element={<ConceptGallery />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
