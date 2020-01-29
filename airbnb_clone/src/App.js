import React from 'react';
import './App.css';
import Header from "./Components/Core/Header";
import Navigation from "./Components/Core/Navigation";
import Accomodation from './Components/Apartaments/Accomodation';
import Footer from './Components/Core/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Navigation />
      <Accomodation />
      <Footer />
    </div>
  );
}

export default App;
