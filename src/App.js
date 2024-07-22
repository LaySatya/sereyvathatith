
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Photo from './components/photo';
import Song from './components/song';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Song />
      <Photo />
      <Footer />
    </>
  );
}

export default App;
