import React from 'react';
import BurgerMenu from './Components/BurgerMenu';
import FormAboutMe from './Components/Forms/FormAboutMe'
import Home from './Components/Home'
import MyPresentation from './Components/MyPresentation';
import MyWorkList from './Components/MyWork.List'
import Project from './Components/Projects/Project'

import { Switch, Route } from 'react-router-dom'

import './App.css';

const App = () => {

  return (
    <div className="App">
      <BurgerMenu />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/worklist" component={MyWorkList}/>
        <Route path="/about" component={MyPresentation}/>
        <Route path="/project" component={Project}/>
        <Route path="/office" component={FormAboutMe} />
      </Switch>
    </div>
  );
}

export default App;
