import React from 'react';
import {BrowserRouter as Router, link, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Products from './Products';

function PageRoute(){
    return(
<React.Fragment>
    <Router>
    <Header/>
    <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route exact path='/About'>
            <About/>
        </Route>
        <Route exact path='/Contact'>
            <Contact/>
        </Route>
        <Route exact path='/Products'>
            <Products/>
        </Route>
    </Switch>
    <Footer/>
    </Router>
    </React.Fragment> )
}
export default PageRoute