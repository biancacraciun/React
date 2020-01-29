import React from 'react';
import Item from './Components/Item';
import Header from './Components/Core/Header';
import Search from './Components/Search';
import './Components/styling.scss';

function App() {
  return (
      <div className="app">
        <Header />
        <Search />
        <h1 id="title">Items</h1>
        <Item />
      </div>
  )
}

export default App;
