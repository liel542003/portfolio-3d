import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import StarsCanvas from './components/canvas/Stars'
import NewtonsCradle from './components/NewtonsCradle'
import SocialIcons from './components/SocialIcons'

const App = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleExplore = () => {
    navigate('/concepts')
  }

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0">
        <StarsCanvas />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-sm md:max-w-2xl px-4"
        >
          Crafting digital experiences that blend creativity and innovation
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExplore}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm md:text-base font-semibold 
                   shadow-lg hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden"
        >
          <span className="relative z-10">Explore My World</span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '0%' : '-100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        <div className="mt-8 md:mt-12 transform scale-75 md:scale-100">
          <NewtonsCradle />
        </div>

        <SocialIcons />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0f] pointer-events-none" />
    </div>
  )
}

export default App
