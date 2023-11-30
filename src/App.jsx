import { useRef } from 'react'
import './App.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

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
          App file
        </main>
      </LocomotiveScrollProvider>
    </>
  )
}

export default App
