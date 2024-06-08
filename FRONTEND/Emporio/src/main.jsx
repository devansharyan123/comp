import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Product from './Pages/Product.jsx'
import Landing from './Pages/Landing.jsx'
import Details from './Pages/Details.jsx';
import Price from './Pages/Price.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element={<Landing />} />
      <Route path='/product' element={<Product />} />
      <Route path='/details' element={<Details />} />
      <Route path='/price' element={<Price />} />
    </Route>
  )
 )

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
  </React.StrictMode>,
)
