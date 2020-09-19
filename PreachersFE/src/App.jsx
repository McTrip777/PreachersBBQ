import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductList from './components/Products/ProductsList'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Details" component={Details} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
