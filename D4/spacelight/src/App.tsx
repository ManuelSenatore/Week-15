
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyMain from './components/MyMain';
import NoticeDetails from './components/NoticeDetails';
import MyNavBar from './components/MyNavBar';
function App() {
  return (
    <BrowserRouter>
    <MyNavBar />
     <Routes>
      <Route path="/" element={<MyMain />} />
      <Route path="/details:noticeId" element={<NoticeDetails />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
