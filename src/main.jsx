import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import {Provider as ReduxProvider} from 'react-redux'
import store from './store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ReduxProvider store={store}>
    <AuthProvider>
    <App />
    </AuthProvider>
    </ReduxProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
