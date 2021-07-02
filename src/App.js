import React, { useState } from 'react';
import SearchPage from './SearchPage';
import LearnMore from './LearnMore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {

    return (
      <Router>
        <div className="App">
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/learnmore/:hitId" component={LearnMore}/>
       
        </div>
      </Router>
    );


  
}


