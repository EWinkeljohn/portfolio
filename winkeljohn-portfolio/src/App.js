import React from "react"
import Header from "./components/Header"
import windmill_banner from './components/windmill_banner.webp';
import './App.css'

const App = () => {
  return (
    <>
     <Header/>
     <br/>
     <img src={windmill_banner} height="300px" alt=""/>
    </>
  )
}

export default App;
