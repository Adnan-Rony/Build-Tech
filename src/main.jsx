import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Route/route.jsx'
import Authprovider from './Firebase/Authprovider.jsx'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>

    <Authprovider>


      <QueryClientProvider client={queryClient}>

        <RouterProvider router={route}></RouterProvider>
      </QueryClientProvider>

    </Authprovider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
