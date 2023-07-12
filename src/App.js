import './App.css';


import Home from "./components/home/Home";
import TourDetails from "./components/TourDetails/TourDetails"
import { Route, Routes } from 'react-router';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
