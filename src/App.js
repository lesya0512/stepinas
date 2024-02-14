import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Catalog from './components/catalog/catalog'
import './fonts/fonts.css'

function App() {

  const [data, setData] = useState([
    {
      "type": "Рубашка Diana",
      "quantity": "12 штук",
      "size": "42, 44, 46, 48"
    }, 
    {
      "type": "Рубашка Victoria",
      "quantity": "19 штук",
      "size": "44, 46, 48"
    },
    {
      "type": "Рубашка Polina",
      "quantity": "37 штук",
      "size": "42, 44"
    }   
  ])



  return (
    <BrowserRouter>

      <Header />

      <Catalog data={data}/>

      <Routes>
        <Route path='/catalog' Component={Catalog} />
      </Routes>

      <Footer />
    
    </BrowserRouter>
  );
}

export default App;
