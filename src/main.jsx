import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Index from './routes/Index'
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";

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
        <Index />
      </BrowserRouter>
    </ErrorBoundary>

  </StrictMode>,
)
