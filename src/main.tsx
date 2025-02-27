import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import StoreProvider from './store/ui/StoreProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
    <App />
    </StoreProvider>
  </React.StrictMode>,
)
