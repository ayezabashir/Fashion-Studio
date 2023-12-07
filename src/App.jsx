import { useRef } from 'react'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from './pages/home/Home';
import { AnimatePresence } from 'framer-motion';
import About from './pages/about/About';

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
        <AnimatePresence>
          <main data-scroll-container ref={containerRef}>
            <Home />
            <About />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </>
  )
}

export default App
