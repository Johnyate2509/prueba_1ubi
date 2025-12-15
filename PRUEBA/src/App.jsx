import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initMap } from './componentes/mapa'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Cargar Google Maps dinámicamente
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY`
    script.async = true
    script.defer = true
    script.onload = initMap

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div id="map" style={{ width: '100%', height: '400px' }} />

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
