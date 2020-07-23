import React from 'react';
import Home from './Components/Home'
import MyPresentation from './Components/MyPresentation';
import MyWorkList from './Components/MyWork.List'
import Paw from './Components/Projects/Paw'

import { Switch, Route } from 'react-router-dom'

import './App.css';
import BurgerMenu from './Components/BurgerMenu';

const App = () => {

  return (
    <div className="App">
      <BurgerMenu />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/worklist" component={MyWorkList}/>
        <Route path="/about" component={MyPresentation}/>
        <Route path="/paw" component={Paw}/>
      </Switch>
    </div>
  );
}

export default App;
