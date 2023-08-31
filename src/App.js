import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header/header';
import HeroSection from './Page/Landing Page/HeroSection';
import MainBody  from './Page/Landing Page/MainBody';
import Footer from './Components/Footer/footer';
import '../src/Style/style.css'
import "bootstrap"

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <MainBody />
    <Footer />
    </>
  );
}

export default App;
