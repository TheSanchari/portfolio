
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Navbar} from "@/layout/navbar";
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div className = "min-h-screen overflow-x-hidden">
    <Navbar></Navbar>
    <main>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </main>
  </div>
  )
}

export default App
