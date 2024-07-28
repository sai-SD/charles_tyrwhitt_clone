import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/AuthContext.jsx'
import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <ChakraProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
