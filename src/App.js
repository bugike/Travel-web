import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import ContactUs from './components/pages/ContactUs';
import Adventure from './components/pages/Adventure';
import Trailer from './components/pages/Trailer';
import Footer from './components/Footer';
import GrandCanyon from './components/pages/places/GrandCanyon';
import BoraBora from './components/pages/places/BoraBora';
import London from './components/pages/places/London';
import Maui from './components/pages/places/Maui';
import Tokyo from './components/pages/places/Tokyo';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/adventure' component={Adventure} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/trailer' component={Trailer} />
          <Route path='/grand-canyon' component={GrandCanyon} />
          <Route path='/bora-bora' component={BoraBora} />
          <Route path='/london' component={London} />
          <Route path='/maui' component={Maui} />
          <Route path='/tokyo' component={Tokyo} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
