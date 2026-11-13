import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { LinksGenPage } from '@/pages/LinksGenPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/links-gen" element={<LinksGenPage />} />
      </Routes>
    </BrowserRouter>
  )
}
