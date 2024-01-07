import { useRef } from 'react'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from './pages/home/Home';
import { AnimatePresence } from 'framer-motion';
import About from './pages/about/About';
import ScrollTriggerProxy from './components/scrolltrigger/ScrollTriggerProxy';
function App() {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true
          }
        }
        watch={
          [

          ]
        }
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <AnimatePresence>
          <main className='App' data-scroll-container ref={containerRef}>
            <Home />
            <About />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </>
  )
}

export default App
