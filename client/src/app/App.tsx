import { useState } from 'react'
// import heroImg from '../assets/hero.png'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '../assets/vite.svg'


import ReactDOM from "react-dom/client";
import { AppRouter } from "./router/AppRouter";
import './App.css'

// import DeveloperAnalytics from "../dashboard/DeveloperAnalytics/DeveloperAnalytics"

function App() {

  return (
    <>
      {/* <DeveloperAnalytics/> */}
      <AppRouter/>
    </>
  )
}

export default App
