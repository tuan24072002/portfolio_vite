import About from './pages/About'
import Home from './pages/Home'
import "./App.css"
import Sidebar from './components/Sidebar'
import MobileSidebar from './components/MobileSidebar'
import Experience from './pages/Experience'
import Project from './pages/Project'
import { useEffect, useState } from 'react'
function App() {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    if (isDark) {
      document.body.setAttribute("data-theme", "dark")
    } else {
      document.body.setAttribute("data-theme", "light")
    }
  }, [isDark])
  return (
    <div className='md:pl-[100px]'>
      <MobileSidebar isDark={isDark} setIsDark={setIsDark} />
      <Sidebar isDark={isDark} setIsDark={setIsDark} />
      <main className='h-full w-full flex flex-col bg-[var(--background-color)] overflow-hidden'>
        <Home />
        <About />
        <Experience />
        <Project />
      </main>
    </div>
  )
}

export default App
