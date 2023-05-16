import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import AddForm from './pages/admin';
import Carriers from './pages/Carrier-view';
import ImgMediaCard from './pages/list';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/admin' component={AddForm} />
          <Route path='/carriers' component={Carriers} />
          <Route path='/list' element={ImgMediaCard} />
          

        </Switch>
      </Router>
    </>
  );
}

export default App;
