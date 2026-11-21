import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from './i18n'
import { applyShareMeta } from '@/lib/documentMeta'
import './index.css'
import App from './App.jsx'

applyShareMeta()
i18n.on('languageChanged', () => {
  applyShareMeta()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

