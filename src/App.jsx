import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import  Header from './components/Header'
import  List from './components/List'
import  Form from './components/Form'
import Video from './components/Video'
import Time from './components/Time'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<main> 
<List titulo ="Batataa"/>
<Video/>
<Form/>
 <Time/>
</main> 
   <Footer/>
    </>
  )
}

export default App
