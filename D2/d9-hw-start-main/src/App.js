import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourites from './components/Favourites'
import FavouritesIcon from './components/FavouritesIcon'

function App() {
  return (
    <BrowserRouter>
      <FavouritesIcon />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
