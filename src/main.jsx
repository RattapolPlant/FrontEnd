import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import Header from './components/Header.jsx'

import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter(
  [
    {
      path :"/",
      element : <HomePage />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <div data-theme="forest" className='h-screen bg-base-100 font-kanit'>
    <Header />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
