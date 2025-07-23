import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react';
import LoginSignup from './components/LoginSignup.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider >
      <ClerkProvider
        appearance={{
          baseTheme: "dark",
          cssLayerName: 'brandLayer',
          variables: {
            colorPrimary: '#5e60ce',
            fontFamily: 'Inter, sans-serif',
          },
          elements: {
            formButtonPrimary: {
              backgroundColor: '#5e60ce',
              color: '#fff',
              borderRadius: '9999px',
              fontWeight: 600,
            },
            formFieldInput: {
              border: '2px solid #ddd',
              padding: '0.75rem',
            },
            headerTitle: {
              fontSize: '1.5rem',
              color: '#333',
            },
          }
        }}
        publishableKey={PUBLISHABLE_KEY}>
          {/* <LoginSignup /> */}
          <App  />
        </ClerkProvider>
    </AppContextProvider>
  </StrictMode>,
)
