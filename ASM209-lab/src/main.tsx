import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LoadingProvider } from './context/Loadding2.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
)
