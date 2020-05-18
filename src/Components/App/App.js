import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Navbar } from '../Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Post from '../Post/Post';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/:post_id' component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
 