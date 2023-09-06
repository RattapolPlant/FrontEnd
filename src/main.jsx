import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider , BrowserRouter , Route , Routes } from 'react-router-dom'

import Header from './components/Header.jsx'

import HomePage from './pages/HomePage.jsx'
import SinglePage from './pages/SinglePage'


// const router = createBrowserRouter(
//   [
//     {
//       path :"/",
//       element : <HomePage />
//     },
//     {
//       path :"/:slug",
//       element : <SinglePage />
//     }
//   ]
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <div data-theme="forest" className='min-h-screen bg-base-100 font-kanit'>
    <React.StrictMode>
      <BrowserRouter>
      <Header />
      <Routes >
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/:slug' element={<SinglePage />} ></Route>
      </Routes>      
      </BrowserRouter>
    </React.StrictMode>
  </div>
)
