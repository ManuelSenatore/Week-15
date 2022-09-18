
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './components/IndexPage';
import MyNavBar from './components/MyNavBar';
import PlayerBar from './components/PlayerBar';
import AlbumPage from './components/AlbumPage';
import ArtistPage from './components/ArtistPage';

function App() {
  return (
    <BrowserRouter>
    <div className="body">
      <MyNavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/album:albumId" element={<AlbumPage />} />
        <Route path="/artist:artistId" element={<ArtistPage />} />
      </Routes>
      <PlayerBar />
    </div>
   </BrowserRouter>
  );
}

export default App;
