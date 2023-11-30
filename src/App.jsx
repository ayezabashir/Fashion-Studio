import { useRef } from 'react'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from './pages/home/Home';

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
        <main data-scroll-container ref={containerRef}>
          <Home />
        </main>
      </LocomotiveScrollProvider>
    </>
  )
}

export default App
