import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import MainPage from './pages/mainpage/mainpage';
import Members from './pages/members/members';
import { Favourites } from './pages/favourites/favourites';
import BandInfo from './pages/band_info/bandinfo';
import Gallery from './pages/gallery/gallery';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/members' element={<Members />} />
          <Route path='/bandinfo' element={<BandInfo />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
