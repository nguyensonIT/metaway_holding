import './App.css'
import Header from './layout/component/Header/Header'
import Home from './page/Home/Home'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './layout/component/Footer/Footer';

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
