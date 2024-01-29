import { All } from "./components/All"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Bg } from "./components/bg"
import { Hello } from "./components/hello"
import { Set } from "./components/set"


function App() {

  return (
    <>
     <Header/>
     <main> 
      <Hero/>
      <Bg/>
      <Hello/>
      <All/>
      <Set/>
     </main>
    </>
  )
}

export default App
