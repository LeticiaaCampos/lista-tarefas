import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)


function App(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
