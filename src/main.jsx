import Index from './routes/Index'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { TransactionsProvider } from './context/TransactionsContext';
import "./index.css";

function fallbackRender({ error }) {
  return (
    <div role="alert">
      <p>Ups! Hubo un error:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <BrowserRouter>
        <AuthProvider>
          <UserProvider>
            <TransactionsProvider>
              <Index />
            </TransactionsProvider>
          </UserProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>

  </StrictMode>,
)
