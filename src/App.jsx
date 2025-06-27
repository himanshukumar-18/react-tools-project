import { Outlet } from 'react-router'
import './App.css'
import { Navbar, Footer } from './Input'

function App() {

  return (
    <>
      <Navbar />
      <main className=''>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
